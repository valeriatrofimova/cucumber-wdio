Feature:Rozetka
    Background:Entry

        Given User navigates to "RO_URL"
        Then Page URL is equal to "RO_URL"
    @rozetka
    Scenario Outline: As a user, I can type into search
        When I click "RozetkaPage|Rozetka|SearchIcon" element
        Then I see in "RozetkaPage|Rozetka|SearchIcon" "<messege>"
        Then I enter "<buy>" into "RozetkaPage|Rozetka|SearchText"
        Then I click "RozetkaPage|Rozetka|SearchClick" element
        Examples:
            | buy    | messege |
            | mobile |         |

    @rozetka
    Scenario: As a user, I can change language
        Then I wait until "RozetkaPage|Rozetka|Language" element is visible
        When I click "RozetkaPage|Rozetka|Language" element


    @rozetka
    Scenario: As a user, I can log into the secure area
        Then I wait until "RozetkaPage|Rozetka|Entry" element is visible
        When I click "RozetkaPage|Rozetka|Entry" element
        Then I enter "<username>" into "RozetkaPage|Rozetka|Login"
        And I enter "<password>" into "RozetkaPage|Rozetka|Password"
        Then I click "RozetkaPage|Rozetka|Button" element
        Examples:
            | username              | password  |
            | kerekkekkek@gmail.com | kerek123K |

