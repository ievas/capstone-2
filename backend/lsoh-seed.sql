INSERT INTO users (username, password, first_name, last_name, email, street_address, city, zip, state, is_store_holder)
VALUES ('anna', 'password1', 'Anna', 'Boo', 'a@k.com', '1234 Elm street', 'Erie', 80516, 'CO', FALSE),
    ('robert', 'password2', 'Robert', 'Foo', 'r@k.com', '1234 Stone street', 'Broomfield', 80038, 'CO', FALSE),
    ('janis', 'password3', 'Janis', 'Too', 'j@k.com', '1234 Bus street', 'Erie', 80516, 'CO', TRUE),
    ('liva', 'password4', 'Liva', 'Noo', 'l@k.com', '1234 Tiger street', 'Broomfield', 80038, 'CO', TRUE);

INSERT INTO orders (user_id, order_date, order_status, items_in_order, store_id)
VALUES (1, '12-10-2021', 'delivered', 3,1),
    (2, '12-18-2021', 'shipped', 2,1),
    (1, '12-19-2021', 'pending', 1,2);

INSERT INTO items (item_name, price, image_url, rating, item_description, store_id, items_in_stock, tags) 
VALUES ('Santa Sweater', 25, 'https://cdn.pixabay.com/photo/2020/07/09/09/46/christmas-5386610_1280.png', 5, 'A lovely vintage sweater great for winter weather and Christmas time.', 1, 7, 'Christmas, Winter, Clothing'),
    ('Scary Spider', 15, 'https://cdn.pixabay.com/photo/2018/10/05/21/21/spider-3726881_1280.png', 4, 'Hairy black spider with red eyes and bendable legs.', 2, 10, 'Halloween, Fall, Decoration'),
    ('Cute Valentines Card', 9, 'https://cdn.pixabay.com/photo/2021/01/25/07/04/hearts-5947464_1280.png', 3, 'This cute card is perfect for Valentine''s day.', 2, 30, 'Valentines, Love, Card'),
    ('Easter Sugar Cookies', 9, 'https://cdn.pixabay.com/photo/2019/03/31/15/42/easter-4093364_1280.jpg', 3, 'Celebrate Easter with these adorable cookies.', 1, 17, 'Easter, Spring, Food, Cookies, Gift'),
    ('Thanksgiving bracelet', 6.90, 'https://cdn.pixabay.com/photo/2017/02/24/20/23/rings-2096142_1280.png', 5, 'Handmade item. Materials: Pearl & shell.', 1, 19, 'Thanksgiving,  Fall, Bracelet, Gift'),
    ('St Patrick''s Day Leprechaun Hat', 29.80, 'https://cdn.pixabay.com/photo/2019/12/08/16/13/st-patricks-day-4681486_1280.jpg', 4, 'Fun top hat for St Patrick''s Day celebration.', 2, 4, 'St. Patrick''s, Leprechaun, Shamrock, Costume'),
    ('4th of July Mailbox', 45, 'https://cdn.pixabay.com/photo/2014/04/02/17/37/mailbox-308122_1280.jpg', 5, 'Patriotic mailbox with address OR last name', 2, 8, '4TH of July, Patriotic, Summer, Mailbox');

      
INSERT INTO orders_items (item_id, order_id) VALUES (1,1),(3,1),(5,1),(2,2),(6,2),(7,3);

INSERT INTO stores (store_name, cover_photo_url, store_holder_id) 
VALUES ('LuvinArms', 'https://pixabay.com/images/id-3194062/', 3), ('Liva''s Essentials', 'https://pixabay.com/images/id-1851071/', 4);

INSERT INTO messages (sender_id, receiver_id, message_text)
VALUES (1, 3, 'Hi! Your items are lovely. How many can I order to get them before 23rd? Thanks!'),
    (2, 4, 'Hey, I would like to order the spider. Can you pack it as a gift?'),
    (4, 2, 'Of course, no problem. Thank you for shopping with us!');
