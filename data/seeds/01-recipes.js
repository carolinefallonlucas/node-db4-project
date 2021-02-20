exports.seed = function (knex) {
        
    return knex('recipes')
        .del()
        .then(function () {
            return knex('recipes').insert([
    
                {
                    recipe_name: "Maple Sweet Potato Bread",
     
                },
                {
                    recipe_name: "Shakshuka",

                },
                {
                    recipe_name: "Flourless Oatmeal Banana Cookies",
     
                },
            ]);
        });
}; 
