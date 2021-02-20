
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', (table) => {
            table.increments('recipe_id');
            table.string('recipe_name', 128).notNullable();
        })
        .createTable('steps', (table) => {
            table.increments('step_id');
            table.string('recipe_steps').notNullable();
            table.integer('step_num').notNullable();
            table
                .integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};
            
            


  exports.down = function (knex) {
	return knex.schema.dropTableIfExists 
		.dropTableIfExists('ingredients')
		.dropTableIfExists('steps')
		.dropTableIfExists('recipes');
};
