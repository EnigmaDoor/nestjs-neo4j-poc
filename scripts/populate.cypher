CREATE
(m1:Machine { id: 1, type: 'TypeA', capacity: 10, status: 'ACTIVE' }),
(m2:Machine { id: 2, type: 'TypeA', capacity: 15, status: 'ACTIVE' }),
(m3:Machine { id: 3, type: 'TypeB', capacity: 20, status: 'ACTIVE' }),
(s1:Sweet { id: 1, name: 'banana split', price: 1, quantityInStock: 1, ingredients: ['BANANA', 'CHOCOLATE'] }),
(s2:Sweet { id: 2, name: 'weirdpear', price: 2, quantityInStock: 2, ingredients: ['APPLE'] }),
(s3:Sweet { id: 3, name: 'peak', price: 3, quantityInStock: 3, ingredients: ['CARAMEL', 'CHOCOLATE'] }),
(s4:Sweet { id: 4, name: 'nutella', price: 4, quantityInStock: 4, ingredients: ['CHOCOLATE', 'SUGAR', 'SUGAR', 'SUGAR', 'SUGAR'] }),
(m1)-[:PRODUCES]->(s1),
(m2)-[:PRODUCES]->(s2),
(m3)-[:PRODUCES]->(s2),
(m3)-[:PRODUCES]->(s3),
(m3)-[:PRODUCES]->(s4)
