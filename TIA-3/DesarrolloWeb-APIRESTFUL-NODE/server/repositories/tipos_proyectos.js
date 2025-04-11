const db = require('../config/database');
const TipoProyecto = require('../models/TipoProyecto');

class TipoProyectoRepository {
    async getAll() {
        const { rows } = await db.query('SELECT * FROM tipo_proyecto');
        return rows.map(row => new TipoProyecto(
          row.id,
          row.codigo,
          row.descripcion,
          row.abreviatura,
          row.fecha_registro
        ));
    }

    async getById(id) {
        const { rows } = await db.query('SELECT * FROM tipo_proyecto WHERE id = $1', [id]);
        if (rows.length === 0) return null;
        const row = rows[0];
        return new TipoProyecto(
            row.id,
            row.codigo,
            row.descripcion,
            row.abreviatura,
            row.fecha_registro
        );
    }

    async create(tipoProyecto) {
        const { rows } = await db.query(
          'INSERT INTO tipo_proyecto (codigo, descripcion, abreviatura) VALUES ($1, $2, $3) RETURNING *',
          [tipoProyecto.codigo, tipoProyecto.descripcion, tipoProyecto.abreviatura]
        );
        const row = rows[0];
        return new TipoProyecto(
            row.id,
            row.codigo,
            row.descripcion,
            row.abreviatura,
            row.fecha_registro
        );
    }

    async update(id, tipoProyecto) {
        const { rows } = await db.query(
          'UPDATE tipo_proyecto SET codigo = $1, descripcion = $2, abreviatura = $3 WHERE id = $4 RETURNING *',
          [tipoProyecto.codigo, tipoProyecto.descripcion, tipoProyecto.abreviatura, id]
        );
        if (rows.length === 0) return null;
        const row = rows[0];
        return new TipoProyecto(
            row.id,
            row.codigo,
            row.descripcion,
            row.abreviatura,
            row.fecha_registro
        );
    }

    async delete(id) {
        const { rowCount } = await db.query('DELETE FROM tipo_proyecto WHERE id = $1', [id]);
        return rowCount > 0;
    }

}

module.exports = new TipoProyectoRepository();