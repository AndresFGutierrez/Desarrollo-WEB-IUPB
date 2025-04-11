Create table tipo_proyecto (
	id smallserial primary key,
	codigo varchar(8) unique,
	descripcion varchar(200) not null,
	abreviatura varchar(6) not null,
	fecha_registro timestamp DEFAULT current_timestamp
);