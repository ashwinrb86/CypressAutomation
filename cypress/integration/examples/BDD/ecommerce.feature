 Feature: End to end journey validation

Application Regression

@Regression
 Scenario: Fill the form and move to Shopping page
 Given I open ecommerce home page and provide details 
 |Name      |Gender     |
 |Robert    |Male       |
 When Validate the details on the page
 Then move to Shopping page

@Smoke
 Scenario: Ecommerce product orrdering and delivery
 Given I open ecommerce home page and provide details 
 |Name      |Gender     |
 |Claire    |Female       |
 When I select the product and add them to Cart
 And validate the total price
 Then select the country of delivery submit verify confirmation message



 