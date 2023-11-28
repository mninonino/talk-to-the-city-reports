let edit_csv = `
# edit_csv_v0 node documentation

The edit_csv can be used to transform the CSV file in various ways.

## Generating columns

Columns can be added, with the given key and value.

## Deleting columns

Columns can be deleted, by specifying the column key.

## Renaming columns

Columns can be renamed, by specifying the old and new column keys.
`;

edit_csv = edit_csv.replace(/@@(.*?)@@/g, '`$1`');
edit_csv = edit_csv.replace(/(.+)(\n|$)/g, '$1<br>\n');

export default edit_csv;
