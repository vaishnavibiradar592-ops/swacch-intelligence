const pool = require("../config/db");

const getWasteRecords = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM waste_records ORDER BY recorded_at DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to get waste records",
    });
  }
};

const createWasteRecord = async (req, res) => {
  try {
    const {
      waste_type,
      quantity,
      location
    } = req.body;

    if (!waste_type || quantity === undefined) {
      return res.status(400).json({
        message: "Waste type and quantity are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO waste_records
       (waste_type, quantity, location)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [waste_type, quantity, location]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create waste record",
    });
  }
};

module.exports = {
  getWasteRecords,
  createWasteRecord
};