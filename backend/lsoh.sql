\echo 'Delete and recreate little-shop-of-horrors db?'
\prompt 'Return for yes or control-C to cancel > ' foo


DROP DATABASE lsoh;
CREATE DATABASE lsoh;
\connect lsoh

\i lsoh-schema.sql 
\i lsoh-seed.sql

-- \echo 'Delete and recreate lsoh_test db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo 

-- DROP DATABASE lsoh_test;
-- CREATE DATABASE lsoh_test;
-- \connect lsoh_test
