$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Category.feature");
formatter.feature({
  "line": 1,
  "name": "Category Scenario",
  "description": "",
  "id": "category-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should able to navigate to correct category page,",
  "description": "so that he can user all product features from categories",
  "id": "category-scenario;user-should-able-to-navigate-to-correct-category-page,",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on \"\u003ccategory\u003e\" link on top menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be navigate to category \"\u003crelated Category page\u003e\" successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "category-scenario;user-should-able-to-navigate-to-correct-category-page,;",
  "rows": [
    {
      "cells": [
        "category",
        "related Category page"
      ],
      "line": 9,
      "id": "category-scenario;user-should-able-to-navigate-to-correct-category-page,;;1"
    },
    {
      "comments": [
        {
          "line": 10,
          "value": "# | Desktops              | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d20 |"
        },
        {
          "line": 11,
          "value": "# | Laptops And Notebooks | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d18 |"
        },
        {
          "line": 12,
          "value": "#  | Components            | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d25 |"
        }
      ],
      "cells": [
        "Tablets",
        "http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d57"
      ],
      "line": 13,
      "id": "category-scenario;user-should-able-to-navigate-to-correct-category-page,;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 150645602352,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "# | Desktops              | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d20 |"
    },
    {
      "line": 11,
      "value": "# | Laptops And Notebooks | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d18 |"
    },
    {
      "line": 12,
      "value": "#  | Components            | http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d25 |"
    }
  ],
  "line": 13,
  "name": "User should able to navigate to correct category page,",
  "description": "so that he can user all product features from categories",
  "id": "category-scenario;user-should-able-to-navigate-to-correct-category-page,;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Category"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on \"Tablets\" link on top menu",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be navigate to category \"http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d57\" successfully",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdef.user_is_on_homepage()"
});
formatter.result({
  "duration": 2899471791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tablets",
      "offset": 15
    }
  ],
  "location": "MyStepdef.user_click_on_link_on_top_menu(String)"
});
formatter.result({
  "duration": 4950603618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d57",
      "offset": 37
    }
  ],
  "location": "MyStepdef.user_should_be_navigate_to_category_successfully(String)"
});
formatter.result({
  "duration": 465970925,
  "status": "passed"
});
formatter.after({
  "duration": 4604847025,
  "status": "passed"
});
});