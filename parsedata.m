fid = fopen('sample.csv');
lines = {};
tline = fgetl(fid);
while ischar(tline)
   lines{end+1,1} = tline;
   tline = fgetl(fid);
end
fclose(fid);
% Function handle to split each row by comma delimiter 
func = @(input)strsplit(input, ',');
% Apply this function to each row in the cell array to get the final data
% As each row is of different lenght we set the UniformOutput to false
data = cellfun(func,lines,'UniformOutput',false);
