exports.seed = function (knex) { 
    return knex('steps')
        .del()
        .then(function () { 
        
            return knex('steps').insert([
                {
                    step_te
                }
            ])
              })
}