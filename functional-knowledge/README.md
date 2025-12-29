# Functional Knowledge Base

This folder contains the functional knowledge gathered from application exploration.

## Structure

### Pages
Contains element details for each page in the application.

**Format:**
```json
{
  "pageName": "Page Name",
  "elements": [
    {
      "name": "element name",
      "locator": "CSS or other selector",
      "type": "textbox|button|dropdown|checkbox|radio|link|label",
      "required": true|false,
      "special_interaction": "Any special handling needed or null"
    }
  ]
}
```

**Naming Convention:** PascalCaseWithPage.json (e.g., `EmployeeCreationPage.json`)

### Flows
Contains high-level flow steps in plain English.

**Format:**
```json
{
  "flowName": "Flow name",
  "steps": [
    "Generic step 1",
    "Generic step 2",
    "..."
  ]
}
```

**Naming Convention:** kebab-case.json (e.g., `employee-creation.json`)

## Test Scenario Derivation

Test scenarios are **derived automatically** from pages + flows:

| Source | Derives |
|--------|---------|
| Flow steps + required fields | **Positive tests** (happy path) |
| Required fields left empty | **Negative tests** (validation) |
| Field types (textbox, dropdown) | **Edge cases** (boundaries, special chars) |

No separate test case storage needed - the test-generation-agent derives all scenarios from:
- `required: true` fields → Must be filled for positive, left empty for negative
- `type: "textbox"` → Test special characters, max length
- `type: "dropdown"` → Test all options, invalid selections

## Generic Steps

Steps should be generic and reusable:
- ✅ "Fill required fields on Employee Creation Page"
- ✅ "Navigate to PIM menu"
- ✅ "Verify success message on Employee List Page"

❌ NOT:
- "Fill first name with John"
- "Click the button at coordinates (100, 200)"
- "Type Admin into username"

## Special Interactions

Document any special handling needed:
- "Wait 2 seconds after click"
- "Wait for autocomplete dropdown"
- "Element appears after page scroll"
- "Requires double-click"
- "Auto-generated if left empty"

## Usage

Agents use this knowledge to:
1. **Avoid unnecessary snapshots** - Use cached locators directly
2. **Execute flows efficiently** - Follow generic steps
3. **Generate test data** - Know which fields are required
4. **Derive test scenarios** - Create positive/negative/edge tests from field metadata
5. **Handle edge cases** - Apply special interactions when needed
6. **Maintain consistency** - Reuse proven locators across tests

## Maintenance

- Knowledge is automatically updated after each exploration
- New elements are added to existing pages
- Changed locators are updated
- Special interactions are noted when discovered
