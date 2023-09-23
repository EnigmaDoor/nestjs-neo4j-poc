CREATE
(m1:Machine { uuid: apoc.create.uuid(), type: 'TypeA', capacity: 10, status: 'ACTIVE' }),
(m2:Machine { uuid: apoc.create.uuid(), type: 'TypeA', capacity: 15, status: 'ACTIVE' }),
(m3:Machine { uuid: apoc.create.uuid(), type: 'TypeB', capacity: 20, status: 'ACTIVE' }),
(s1:Sweet { uuid: apoc.create.uuid(), name: 'banana split', price: 1, quantityInStock: 1, ingredients: ['BANANA', 'CHOCOLATE'] }),
(s2:Sweet { uuid: apoc.create.uuid(), name: 'weirdpear', price: 2, quantityInStock: 2, ingredients: ['APPLE'] }),
(s3:Sweet { uuid: apoc.create.uuid(), name: 'peak', price: 3, quantityInStock: 3, ingredients: ['CARAMEL', 'CHOCOLATE'] }),
(s4:Sweet { uuid: apoc.create.uuid(), name: 'nutella', price: 4, quantityInStock: 4, ingredients: ['CHOCOLATE', 'SUGAR', 'SUGAR', 'SUGAR', 'SUGAR'] }),
(m1)-[:PRODUCES]->(s1),
(m2)-[:PRODUCES]->(s2),
(m3)-[:PRODUCES]->(s2),
(m3)-[:PRODUCES]->(s3),
(m3)-[:PRODUCES]->(s4)
