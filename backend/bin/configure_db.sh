#!/bin/bash


dropdb -U node2_user dragonstackdb
createdb -U node2_user dragonstackdb

echo "Configuring dragonstackdb"

psql -U node2_user dragonstackdb < ./bin/sql/generation.sql
psql -U node2_user dragonstackdb < ./bin/sql/dragon.sql
psql -U node2_user dragonstackdb < ./bin/sql/trait.sql
psql -U node2_user dragonstackdb < ./bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"
