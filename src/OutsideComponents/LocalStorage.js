export const LocalStorage = {
    saveTodoLists(todoList) {
        this._save(todoList, 'todolists');
        /* вместо этого вызвали метод _save*/
        /*let stateToString = JSON.stringify(todoList);
        localStorage.setItem('todolists', stateToString);*/
    },
    getTodoLists() {
        debugger
        return this._get('todolists');

        /*let stateToString = localStorage.getItem('todolists');
        if (stateToString != null) {
            let state = JSON.parse(stateToString);
            /!* если не нал,возращаем наш дессерилизованный стейт наружу  по запросу*!/
            return state;
        }
        если ничего нет после десеррилизации возращаем null
        return null;*/
    },

    getTasks() {
        return this._get('our-state-')
    },
    saveTasks(tasks, todolistId) {
        this._save(tasks, 'our-state-' + todolistId);
        /* вместо этого вызвали метод _save*/
        /*let stateToString = JSON.stringify(task);
                localStorage.setItem('our-state-'+todolistId, stateToString);*/
    },
    _save(data, key) {
        let stateToString = JSON.stringify(data);
        localStorage.setItem(key, stateToString);
    },
    _get(key) {
        debugger
        let stateToString = localStorage.getItem(key);
        if (stateToString != null) {
            let state = JSON.parse(stateToString);
            debugger
            return state;
        }
        return null;
    }

};