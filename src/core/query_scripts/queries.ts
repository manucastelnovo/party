export const SELECT_USERS_QUERY = `SELECT * FROM public.user;`;

export const SELECT_USER_QUERY = `SELECT * FROM public.user WHERE id = $1;`;

export const INSERT_USER_QUERY = `
INSERT INTO public.user (user_name,  password)
VALUES ($1, $2)
RETURNING *;
`;

export const UPDATE_USER_QUERY = `
UPDATE public.user
SET user_name=$1, password=$2
WHERE id=$1 RETURNING *;
`;

//ORDER

export const SELECT_ORDER_QUERY = `SELECT * FROM public.order WHERE user_id = $1;`;

export const INSERT_ORDER_QUERY = `
INSERT INTO public.order (user_id, amount, profit)
VALUES ($1, $2,$3)
RETURNING *;
`;

