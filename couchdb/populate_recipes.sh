
## curl -X PUT http://admin:admin@127.0.0.1:5984/recipes 
## curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes
## curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:chicken -d ''

curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:chicken -d '{"type":"ingredient","name":"Pollo"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:carrot -d '{"type":"ingredient","name":"Zanahoria"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:col -d '{"type":"ingredient","name":"Col"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:leek -d '{"type":"ingredient","name":"Puerro"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:milk -d '{"type":"ingredient","name":"Leche"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:condensed-milk -d '{"type":"ingredient","name":"Leche condensada"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:broth -d '{"type":"ingredient","name":"Caldo"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:flour -d '{"type":"ingredient","name":"Harina"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:butter -d '{"type":"ingredient","name":"Mantequilla"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:egg -d '{"type":"ingredient","name":"Huevo"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:breadcrumbs -d '{"type":"ingredient","name":"Bread crumbs"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:olive-oil -d '{"type":"ingredient","name":"Aceite de oliva"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:sunflower-oil -d '{"type":"ingredient","name":"Aceite de girasol"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:pepper -d '{"type":"ingredient","name":"Pimienta"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:nutmeg -d '{"type":"ingredient","name":"Nuez moscada"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:salt -d '{"type":"ingredient","name":"Sal"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:water -d '{"type":"ingredient","name":"Agua"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:yeast -d '{"type":"ingredient","name":"Levadura"}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/ingredient:vegetable-stock-cube -d '{"type":"ingredient","name":"Pastilla de caldo de verduras"}'

curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/recipe:croquetas-cocido -d '{"type":"recipe","name":"Croquetas de cocido","description":"Elaboración de unas deliciosas croquetas de cocido como se han hecho toda la vida","difficulty":3,"minimum_dinners":2,"maximum_dinners":4,"preparation_time":60,"cooking_time":20,"ingredients":[{"id":"chicken","grams":200},{"id":"carrot","grams":15},{"id":"leek","grams":15},{"id":"col","grams":15},{"id":"milk","litres":0.25},{"id":"broth","litres":0.5},{"id":"flour","grams":48},{"id":"butter","grams":40},{"id":"eggs","units":2},{"id":"breadcrumbs"},{"id":"pepper"},{"id":"olive-oil"},{"id":"nutmeg"},{"id":"salt"}],"steps":["Cortar las carnes y las verduras del cocido en trocitos muy pequeños.","Rehogar la harina en la mantequilla hasta que esté dorada; verter el caldo y la leche evaporada y cocerlo, removiendo continuamente, durante 15 minutos.","Añadir la carne y la verdura, sazonarlo con sal, pimienta y nuez moscada y cocerlo 5 minutos más. Extenderlo en una bandeja y dejarlo enfriar.","Luego, formar las croquetas, pasarlas por huevo batido y pan rallado y freírlas en abundante aceite caliente."]}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/recipe:crema-zanahoria-puerros -d '{"type":"recipe","name":"Crema de zanahoria y puerros","description":"Crema de zanahoria y puerros apta para vegetarianos y fuente de fibra","difficulty":1,"minimum_dinners":4,"maximum_dinners":4,"preparation_time":10,"cooking_time":25,"ingredients":[{"id":"water","litres":0.7},{"id":"salt"},{"id":"pepper"},{"id":"olive-oil","litres":0.048},{"id":"carrot","grams":400},{"id":"leek","grams":400},{"id":"milk","litres":0.2},{"id":"vegetable-stock-cube","units":1}],"steps":["Pelar los puerros y las zanahorias y cortar en rodajas.","Calentar el aceite y rehogar las verduras a fuego suave durante unos 10 minutos, removiendo de vez en cuando.","Disolver la pastilla de caldo en el agua caliente y verter el caldo. Cocer a fuego medio unos 15 minutos, con la olla tapada (hasta que las zanahorias estén tiernas). Añadir la pimienta. Separar medio vaso del caldo de la cocción.","Añadir la leche, y triturar hasta dejar una crema fina. Ir añadiendo el caldo reservado, hasta dejar la consistencia deseada. Rectificar de sal si es necesario."]}'
curl -X PUT -H "Content-Type: application/json" http://admin:admin@127.0.0.1:5984/recipes/recipe:bizcocho -d '{"type":"recipe","name":"Bizcocho","description":"Una receta de bizcocho excelente fuente de calcio de alta biodisponibilidad y de hidratos de carbono complejos que nos aportan energía sostenida. Con grasas insaturadas beneficiosas para nuestra salud cardiovascular.","difficulty":1,"minimum_dinners":8,"maximum_dinners":10,"preparation_time":5,"cooking_time":35,"ingredients":[{"id":"condensed-milk","litres":0.37},{"id":"flour","grams":370},{"id":"sunflower-oil","litres":0.185},{"id":"eggs","units":3},{"id":"yeast","grams":16}],"steps":["Batir los huevos y mezclar el resto de los ingredientes hasta obtener una crema.","Verterla en un molde alargado de unos 20 cm o tipo plum cake, ligeramente engrasado con mantequilla y espolvoreado con harina.","Precalentar el horno a 180º y cocerlo a media altura arriba y abajo sin ventilador a 180º durante unos 35 minutos."]}'