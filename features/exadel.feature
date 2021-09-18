Feature: Exadel app

  Background: Background name

    Given User navigates to "BASE_URL"
  @smoke
  Scenario: As a user, I check News items
    Then Page URL is equal to "BASE_URL"
    Then News Items list "HomePage|Footer|NewsItems" contains values:
      | Blog               |
      | Published Articles |
      | Press Releases     |
      | Company News       |
      | Events             |
  
  Scenario: As a user, I can open and check careers page
    When I click "HomePage|Header|Careers" element
    Then I sleep 3 seconds
    Then Page URL contains "BASE_URL" with path "careers"
    Then Page title is equal to "Accelerate Your Career with a Global IT Company | Exadel"
    Then I wait until "CareerPage|SendSvBtn" element is visible

  @tag
  Scenario Outline: As a user, I can type into search
    When I click "HomePage|Header|SearchIcon" element
    Then I wait until "HomePage|Header|SearchIcon" element is visible
    When I enter "<text>" text into "HomePage|Header|SearchInput" element
    Then Input value of "HomePage|Header|SearchInput" element contains "<text>" text
    Examples:
      | text |
      | xxx  |
      | test |



