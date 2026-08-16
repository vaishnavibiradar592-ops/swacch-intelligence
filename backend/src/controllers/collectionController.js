const pool = require("../config/db");

const getCollections = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM collection_records ORDER BY collection_date DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to get collection records"
    });
  }
};

const createCollection = async (req, res) => {
  try {
    const {
      location,
      waste_quantity,
      collection_date,
      status
    } = req.body;

    if (!location) {
      return res.status(400).json({
        message: "Location is required"
      });
    }

    const result = await pool.query(
      `INSERT INTO collection_records
       (location, waste_quantity, collection_date, status)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [
        location,
        waste_quantity,
        collection_date,
        status
      ]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create collection record"
    });
  }
};

module.exports = {
  getCollections,
  createCollection
};