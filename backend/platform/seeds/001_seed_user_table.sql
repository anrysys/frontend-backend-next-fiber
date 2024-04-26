-- Insert demo data into user table
-- Password: demo#123
INSERT INTO "user" (is_admin,short_name,email,password,first_name,last_name) values
(TRUE, 'admin', 'admin@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'Admin'),
(FALSE, 'anry', 'anry@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Andrii', 'Akishyn'),
(FALSE, 'alex', 'alex@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Alex', 'Nikulin'),
(FALSE, 'user1', 'user1@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 1'),
(FALSE, 'user2', 'user2@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 2'),
(FALSE, 'user3', 'user3@hackstay.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 3');