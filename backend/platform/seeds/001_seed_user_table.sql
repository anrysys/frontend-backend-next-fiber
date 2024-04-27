-- Insert demo data into user table
-- Password: demo#123
INSERT INTO "user" (is_admin,short_name,email,password,first_name,last_name) values
(TRUE, 'admin', 'admin@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'Admin'),
(FALSE, 'anry', 'anry@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Andrii', 'Akishyn'),
(FALSE, 'user0', 'alex@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 0'),
(FALSE, 'user1', 'user1@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 1'),
(FALSE, 'user2', 'user2@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 2'),
(FALSE, 'user3', 'user3@my-domain.com', '$2a$10$AWuR/dHlOdwYY0Vwtez28.thr67ir8LoB964QQr8QS2tX/eYKh8yS', 'Mr.', 'User 3');