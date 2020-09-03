Feature: Category Scenario
  @Category
  Scenario Outline: User should able to navigate to correct category page,
  so that he can user all product features from categories
    Given user is on homepage
    When user click on "<category>" link on top menu
    Then user should be navigate to category "<related Category page>" successfully
    Examples:
      | category              | related Category page                                                   |
     # | Desktops              | http://tutorialsninja.com/demo/index.php?route=product/category&path=20 |
    # | Laptops And Notebooks | http://tutorialsninja.com/demo/index.php?route=product/category&path=18 |
    #  | Components            | http://tutorialsninja.com/demo/index.php?route=product/category&path=25 |
      | Tablets               | http://tutorialsninja.com/demo/index.php?route=product/category&path=57 |
     # | Software              | http://tutorialsninja.com/demo/index.php?route=product/category&path=17 |
     # | Phones & PDAS         | http://tutorialsninja.com/demo/index.php?route=product/category&path=24 |
     # | Cameras               | http://tutorialsninja.com/demo/index.php?route=product/category&path=33 |
     # | MP3 Player            | http://tutorialsninja.com/demo/index.php?route=product/category&path=34 |