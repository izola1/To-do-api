CREATE TABLE public.users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);

INSERT INTO users (name)
VALUES  ('Isaac'),
        ('Deborah'),
        ('Esson');


CREATE TABLE user_tasks
(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    state VARCHAR(50) NOT NULL,
    user_id integer NOT NULL,
    CONSTRAINT user_tasks_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);


INSERT INTO user_tasks (description, state, user_id )
VALUES  ('Do the dishes', 'done', 2),
        ('Write project reports', 'to do', 1);
    