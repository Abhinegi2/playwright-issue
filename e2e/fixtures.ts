// Example fixture file that uses TypeScript decorators
// This demonstrates why tsx/esm is needed

export class ExampleEntity {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  // TypeScript decorator (experimental feature)
  static createFromData(data: { id: string; name: string }): ExampleEntity {
    return new ExampleEntity(data.id, data.name);
  }
}

// Helper function for tests
export function createTestData() {
  return {
    entity1: new ExampleEntity("1", "Test Entity 1"),
    entity2: new ExampleEntity("2", "Test Entity 2"),
  };
}
