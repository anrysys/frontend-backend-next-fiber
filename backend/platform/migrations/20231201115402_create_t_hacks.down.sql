-- Delete tables
DROP TRIGGER update_hacks_updated_at ON hacks;
DROP TABLE IF EXISTS hacks;
DROP TYPE IF EXISTS _hacks_hack_status_enum;