let participant_filter = `
# participant_filter_v0 node documentation

The participant_filter node is used to filter out comments from a CSV file based on the participants that made them. If the names that were originally in the 'interview' column match the text input in the field, then those comments will remain, and those that do not match get filtered out.
`;

participant_filter = participant_filter.replace(/@@(.*?)@@/g, '`$1`');
participant_filter = participant_filter.replace(/(.+)(\n|$)/g, '$1<br>\n');

export default participant_filter;
