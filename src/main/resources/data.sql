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
    seats (name, start_lat, start_lng, end_lat, end_lng, floor_id)
VALUES
    ('AA-1', 277, 121, 298, 181, 1),
    ('AA-2', 277, 181, 298, 241, 1),
    ('AA-3', 225, 61, 247, 121, 1),
    ('AA-4', 184, 61, 225, 91, 1),
    ('AA-5', 184, 91, 225, 121, 1),
    ('AA-6', 142, 61, 184, 91, 1),
    ('AA-7', 142, 91, 184, 121, 1),
    ('AA-8', 100, 61, 142, 91, 1),
    ('AA-9', 100, 91, 142, 121, 1),
    ('AA-10', 58, 61, 100, 91, 1),
    ('AA-11', 58, 91, 100, 121, 1),
    ('AA-12', 225, 151, 247, 211, 1),
    ('AA-13', 184, 151, 225, 181, 1),
    ('AA-14', 184, 181, 225, 211, 1),
    ('AA-15', 142, 151, 184, 181, 1),
    ('AA-16', 142, 181, 184, 211, 1),
    ('AA-17', 100, 151, 142, 181, 1),
    ('AA-18', 100, 181, 142, 211, 1),
    ('AA-19', 58, 151, 100, 181, 1),
    ('AA-20', 58, 181, 100, 211, 1),
    ('AA-21', 225, 241, 247, 301, 1),
    ('AA-22', 184, 241, 225, 271, 1),
    ('AA-23', 184, 271, 225, 301, 1),
    ('AA-24', 142, 241, 184, 271, 1),
    ('AA-25', 142, 271, 184, 301, 1),
    ('AA-26', 100, 241, 142, 271, 1),
    ('AA-27', 100, 271, 142, 301, 1),
    ('AA-28', 58, 241, 100, 271, 1),
    ('AA-29', 58, 271, 100, 301, 1);

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
    reservations (date, user_id, seat_id)
VALUES
    ('2024-01-26', 1, 1),
    ('2024-01-26', 2, 2);
    -- (3, 3),
    -- (4, 4);