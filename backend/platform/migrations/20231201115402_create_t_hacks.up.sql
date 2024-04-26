-- Create ENUM type for hack_status
DROP TYPE IF EXISTS _hacks_hack_status_enum;
CREATE TYPE _hacks_hack_status_enum AS ENUM ('pending', 'active', 'suspended', 'blocked', 'rejected', 'deleted');
-- Create hacks table
CREATE TABLE hacks (
    hack_id SERIAL8 NOT NULL,
    title varchar (255) NOT NULL,
    description TEXT NOT NULL,
    user_id INT8 NOT NULL,
    hack_status _hacks_hack_status_enum NOT NULL DEFAULT 'pending'::_hacks_hack_status_enum,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW (),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    deleted_at  TIMESTAMP WITH TIME ZONE DEFAULT NULL,
	CONSTRAINT haks_pkey PRIMARY KEY (hack_id),
	CONSTRAINT hacks_hack_status_check CHECK ((hack_status = ANY (ARRAY[
            'pending'::_hacks_hack_status_enum, 
            'active'::_hacks_hack_status_enum, 
            'suspended'::_hacks_hack_status_enum, 
            'blocked'::_hacks_hack_status_enum, 
            'rejected'::_hacks_hack_status_enum, 
            'deleted'::_hacks_hack_status_enum
        ]))),
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

COMMENT ON TABLE hacks IS 'Hacks table';

CREATE INDEX hacks_user_id_fx ON hacks (user_id);

-- Add indexes
CREATE INDEX hacks_hack_status_idx ON hacks (hack_status);
CREATE INDEX hacks_user_id_idx ON hacks (user_id);

-- Add index on created_at and updated_at columns
CREATE INDEX hacks_created_at_idx ON users USING btree (created_at);
CREATE INDEX hacks_updated_at_idx ON users USING btree (updated_at);

-- Create triggers
CREATE TRIGGER update_hacks_updated_at
BEFORE UPDATE ON hacks
FOR EACH ROW
EXECUTE FUNCTION _update_all_updated_at();