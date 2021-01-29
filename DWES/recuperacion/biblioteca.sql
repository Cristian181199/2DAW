DROP TABLE IF EXISTS lectores CASCADE;

CREATE TABLE lectores
(
      id        bigserial       PRIMARY KEY
    , nombre    varchar(255)    NOT NULL
    , telefono  varchar(11)
);

DROP TABLE IF EXISTS libros CASCADE;

CREATE TABLE libros
(
      id        bigserial       PRIMARY KEY
    , isbn      varchar(13)     NOT NULL UNIQUE
    , titulo   varchar(255)     NOT NULL
);

DROP TABLE IF EXISTS prestamos CASCADE;

CREATE TABLE prestamos 
(
      id            bigserial       PRIMARY KEY
    , libro_id      bigint          NOT NULL REFERENCES libros (id)
    , lector_id     bigint          NOT NULL REFERENCES lectores (id)
    , creado_en     timestamp(0)    NOT NULL
    , devuelto_en   timestamp(0)    NOT NULL
);