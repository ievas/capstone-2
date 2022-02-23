CREATE TABLE users (

    id SERIAL PRIMARY KEY,
    username VARCHAR(25),
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip INTEGER NOT NULL,
    state TEXT NOT NULL,
    is_store_holder BOOLEAN NOT NULL 
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    order_date TEXT NOT NULL,
    order_status TEXT NOT NULL,
    items_in_order INTEGER NOT NULL,
    store_id INTEGER NOT NULL
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name TEXT NOT NULL,
    price NUMERIC CHECK (price >= 0),
    image_url TEXT NOT NULL,
    rating INTEGER CHECK (rating <= 5),
    item_description TEXT NOT NULL,
    store_id INTEGER NOT NULL,
    items_in_stock INTEGER NOT NULL,
    tags TEXT NOT NULL
);

CREATE TABLE orders_items (
    item_id INTEGER REFERENCES items ON DELETE CASCADE,
    order_id INTEGER REFERENCES orders ON DELETE CASCADE,
    PRIMARY KEY (item_id, order_id)
);

CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    store_name TEXT NOT NULL,
    cover_photo_url TEXT NOT NULL,
    store_holder_id INTEGER NOT NULL
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INTEGER NOT NULL,
    receiver_id INTEGER NOT NULL,
    message_text TEXT NOT NULL
);