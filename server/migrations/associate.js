tasks_user.associate = function(models) {
    // associations can be defined here
    tasks_user.belongsTo(models.user,
        {
            as: 'user',
            foreignKey: 'user_id',
        }
    );
    tasks_user.belongsTo(models.tasks,
        {
            as: 'tasks',
            foreignKey: 'task_id',
        }
    );
};