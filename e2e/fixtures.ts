// TypeScript declare fields that require build.external
export class ExampleEntity {
  declare id: string;
  declare name: string;
  
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export function createTestData() {
  return {
    entity1: new ExampleEntity("1", "Test Entity 1"),
    entity2: new ExampleEntity("2", "Test Entity 2"),
  };
}
