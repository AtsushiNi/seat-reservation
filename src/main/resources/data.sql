INSERT INTO
    offices (name)
VALUES
    ('東京本社'),
    ('大阪支社'),
    ('福岡支社');

INSERT INTO
    floors (name, map_image, office_id)
VALUES
    ('1階', 'tokyo_1.png', 1),
    ('2階', 'tokyo_2.png', 1),
    ('3階', 'tokyo_3.png', 1),
    ('1階', 'osaka_1.png', 2),
    ('2階', 'osaka_2.png', 2),
    ('1階', 'fukuoka_1.png', 3);

INSERT INTO
    seats (position_lat, position_lng, floor_id)
VALUES
    (287, 150, 1),
    (203, 210, 1),
    (161, 465, 1),
    (79, 585, 1),
    (0, 0, 2),
    (0, 0, 3),
    (0, 0, 4),
    (0, 0, 5),
    (0, 0, 6);

INSERT INTO
    divisions (name)
VALUES
    ('営業部'),
    ('人事部'),
    ('開発部');

INSERT INTO
    users (name, division_id)
VALUES
    ('佐藤一郎', 1),
    ('鈴木二郎', 1),
    ('田中三郎', 2),
    ('山田四郎', 3);

INSERT INTO
    reservations (user_id, seat_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4);