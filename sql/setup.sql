DROP TABLE IF EXISTS cats;

CREATE TABLE cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cat_name TEXT NOT NULL,
    breed TEXT,
    fur_color TEXT NOT NULL,
    age BIGINT NOT NULL
)