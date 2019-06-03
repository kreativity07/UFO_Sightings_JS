# UFO-Sightings

Based on an array of JavaScript objects, I have created this table dynamically to display "UFO Sightings". The `Duration` values in the dataset have been corrected to clear the typo errors (the word "minutes" was misspelled multiple times in the original table). 

# THE FILTER SEARCH
The user will have 3 options to search and filter the findings by `Date`,`City` and/or `Shape`. 

If the user chooses all the 3 filters to search for the UFO Sightings, for `Date`, `City` and `Shape` (for example `1/1/2010`, `El Cajon`, `Triangle`), the table will filter to display the exact match that meets all 3 criterion.

If the user chooses to use only 1 of the 3 filters, say `Date` (for example `1/1/2010`), then the table will display all of the Dates specific to that search. At this point, there is no filter on `City` and `Shape`.

However, if the user chooses to utilize 2 of the 3 criterion, then the table will display all of 'both' the filters, say `City` and `Shape` (for example `Willow` and `Sphere`). At this point, there is no filter on the `Date`.

The only time the user will see `No results found. Try another filter!` is when the user inputs a search which does not exist in the dataset. For example, if user entered `Round` instead of `Circle` in `Shape` filter, there will not be any matches as `Round` shape is not part of this dataset.