
tic;
labels = {'heavy', 'uncertainty', 'heroic', 'tragic', 'agitated', 'dreamy', ...
          'strong', 'tenderness', 'melancholy', 'anxiety', 'gloomy', ...
          'in awe', 'joyful', 'sad', 'unease', 'energetic', 'tense', ...
          'serene', 'filled with wonder', 'stimulated'};

allSubFolders = genpath(pwd);
remain = allSubFolders;
listOfFolderNames = {};
while true
	[singleSubFolder, remain] = strtok(remain, ';');
	if isempty(singleSubFolder)
		break;
    end
    if contains(singleSubFolder, 'completed')
        listOfFolderNames = [listOfFolderNames singleSubFolder];
    end
end
expression = '(^|[\. ])\s*.'; % to process artist names so that they appear well in the figure
replace = '${upper($0)}';
results = containers.Map('KeyType', 'char', 'ValueType', 'any');
imageNames = containers.Map('KeyType', 'char', 'ValueType', 'char');
logfid = fopen('log.txt','wt') ;
numberOfFolders = length(listOfFolderNames);
for k = 1 : numberOfFolders
	thisFolder = listOfFolderNames{k};
	fprintf(logfid, '---\nProcessing folder %s\n', thisFolder);
	filePattern = sprintf('%s/*.csv', thisFolder);
	baseFileNames = dir(filePattern);
	numberOfFiles = length(baseFileNames);
	if numberOfFiles >= 1
		for f = 1 : numberOfFiles
			fullFileName = fullfile(thisFolder, baseFileNames(f).name);
            if contains(fullFileName, 'fixed_')
                fprintf(logfid, 'Already fixed files, skipping...\n');
                continue;
            end
			fprintf(logfid, '------\nProcessing CSV file %s\n', fullFileName);
            fid = fopen(fullFileName,'rt') ;
            S = textscan(fid,'%s','delimiter','\n');
            S = S{1};
            fclose(fid);
            idx = contains(S,'Now quickly answer this question:') ;
            firstIdx = find(idx, 1, 'first') - 3;
            S(idx) = [] ;
            idx = contains(S,'What instrument is in the painting?') ;
            S(idx) = [] ;
            idx = contains(S,'(click the correct answer)') ;
            S(idx) = [] ;
            idx = contains(S, 'What is the second dominant color in the artwork?');
            S(idx) = [];
            S = S(firstIdx:numel(S)-1);
            i = 1;
            while i < numel(S)
                primaryemotline = strsplit(S{i}, ',');
                found = false;
                for m=1:numel(primaryemotline)
                    for j=1:numel(labels)
                        if strcmp(primaryemotline{m}, labels{j}) == 1
                            found = true;
                            primaryemot = labels{j};
                            primaryemotintensity = str2num(primaryemotline{m+1});
                            break;
                        end
                    end
                end
                if found == false
                    primaryemot = 'neutral';
                    primaryemotintensity = 0;
                end
                i = i + 1;
                secondaryemotline = strsplit(S{i}, ',');
                found = false;
                for m=1:numel(secondaryemotline)
                    for j=1:numel(labels)
                        if strcmp(secondaryemotline{numel(secondaryemotline) - m + 1}, labels{j}) == 1
                            found = true;
                            secondaryemot = labels{j};
                            secondaryemotintensity = str2num(secondaryemotline{numel(secondaryemotline) - m + 2});
                            break;
                        end
                    end
                end
                if found == false
                    secondaryemot = 'neutral';
                    secondaryemotintensity = 0;
                end
                i = i + 1;
                likabilityline = strsplit(S{i}, ',');
                found = false;
                for m=1:numel(likabilityline)
                    if contains(likabilityline{m}, 'image_next')
                        likability = str2num(likabilityline{m+1});
                        found = true;
                        break;
                    end
                end
                if found == false
                    likability = -1;
                end
                i = i + 1;
                nameline = strsplit(S{i}, ',');
                found = false;
                for m=1:numel(nameline)
                    if contains(nameline{m}, '.png')
                        name = nameline{m};
                        found = true;
                        break;
                    end
                end
                if found == false
                    name = nameline{12};
                    m = 12;
                end
                artistName = strrep(nameline{m+2},'-',' ');
                artistName = regexprep(artistName,expression,replace);
                imageNames(artistName) = nameline{m};
                i = i + 1;
                fprintf(logfid,'%s (%s) : primary=%s, %d, secondary=%s, %d, likability=%d\n', name,artistName,  primaryemot, primaryemotintensity, secondaryemot, secondaryemotintensity, likability);
                if (isKey(results, name) == 1)
                    results(name) = [results(name); {primaryemot, primaryemotintensity, secondaryemot, secondaryemotintensity, likability, artistName}];
                else
                    results(name) = {primaryemot, primaryemotintensity, secondaryemot, secondaryemotintensity, likability, artistName};
                end
            end
            %fixedFileName = fullfile(thisFolder, ['fixed_' baseFileNames(f).name]);
            %fprintf('New fixed file name: %s\n', fixedFileName);
            %fid = fopen(fixedFileName,'wt') ;
            %fprintf(fid,'%s\n',S{:});
            %fclose(fid) ;
            %fprintf('Finished writing: %s\n------\n', fixedFileName);
		end
	else
		fprintf(logfid, '------\nFolder %s has no CSV files in it.\n', thisFolder);
	end
end
fclose(logfid);


%graph init starts
total_emotions = 20;
test_conditions = 5;

n = total_emotions;
tc = test_conditions;
spopt = {[0.1 0.05], [0.1 0.05], [0.1 0.05]};
subplot = @(m,n,p) subtightplot(m,n,p,spopt{:}); 

emotion_names = [""];

header = {'emotion_number', 'emotion_name', 'th_e', 'closest_matching_emotion', 'i_e', 'v_e_ep', 'v_e_e'};
f_emotion_number = 1:tc;
f_n = ones(1,tc) .* -1.0;
f_emotion_name = ["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
          "tense", "anxiety", "uncertainty", "tragic", "unease", ...
          "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
          "dreamy", "filled with wonder", "in awe"];
f_th_e = ones(1,tc) .* -1.0;
f_closest_matching_emotion = ["","","","","","","","","","","","","","","","","","","",""];
f_i_e = ones(1,tc) .* -1.0;
f_v_e_e = ones(1,tc) .* -1.0;
f_v_e_ep = ones(1,tc) .* -1.0;
emotion_data = [];
I_i = [];
% graph init end

% csv files for heatmap
allbins = zeros(numel(f_emotion_name)*5,1);
likeabilityonebins = zeros(numel(f_emotion_name)*5,1);
likeabilitytwobins = zeros(numel(f_emotion_name)*5,1);
likeabilitythreebins = zeros(numel(f_emotion_name)*5,1);
likeabilityfourbins = zeros(numel(f_emotion_name)*5,1);
likeabilityfivebins = zeros(numel(f_emotion_name)*5,1);
for i=1:numel(results.keys)
    bins = zeros(numel(f_emotion_name)*5,1); % 5 intensity levels
    tempres = results.keys;
    currentImageName = tempres{i};
    currentImageScores = results(currentImageName);
    rows = size(results(currentImageName), 1);
    for j=1:rows
        [primaryEmotNonNeutral,primaryemotIdx] = ismember(currentImageScores{j, 1}, f_emotion_name);
        [secondaryEmotNonNeutral,secondaryemotIdx] = ismember(currentImageScores{j, 3}, f_emotion_name);
        if primaryemotIdx > 0
            bins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = bins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
            allbins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = allbins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
            likeability = currentImageScores{j,5};
            switch likeability
                case 1
                    likeabilityonebins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = likeabilityonebins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
                case 2
                    likeabilitytwobins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = likeabilitytwobins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
                case 3
                    likeabilitythreebins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = likeabilitythreebins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
                case 4
                    likeabilityfourbins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = likeabilityfourbins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
                case 5
                    likeabilityfivebins((primaryemotIdx) + (currentImageScores{j, 2} - 1) * numel(f_emotion_name)) = likeabilityfivebins((primaryemotIdx) + (currentImageScores{j, 2}-1)*numel(f_emotion_name)) + 1;
                otherwise
            end
        end
        if secondaryemotIdx > 0
            bins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = bins((secondaryemotIdx) + (currentImageScores{j, 4}-1)*numel(f_emotion_name)) + 1;
            allbins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = allbins((secondaryemotIdx) + (currentImageScores{j, 4}-1)*numel(f_emotion_name)) + 1;
            likeability = currentImageScores{j,5};
            switch likeability
                case 1
                    likeabilityonebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = likeabilityonebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) + 1;
                case 2
                    likeabilitytwobins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = likeabilitytwobins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) + 1;
                case 3
                    likeabilitythreebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = likeabilitythreebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) + 1;
                case 4
                    likeabilityfourbins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = likeabilityfourbins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) + 1;
                case 5
                    likeabilityfivebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) = likeabilityfivebins((secondaryemotIdx) + (currentImageScores{j, 4}-1)* numel(f_emotion_name)) + 1;
                otherwise
            end
        end
        artistName = currentImageScores{j, 6};
    end
    fname_prefix = split(currentImageName, '/');
    fname_prefix = split(fname_prefix{2}, '.');
    fname_prefix = fname_prefix{1};
    artistName = strrep(artistName, ' ', '_');
    currentresfid = fopen(['heatmap/csv/' num2str(fname_prefix) '_' artistName '.csv'], 'wt');
    for j=1:numel(bins)
        fprintf(currentresfid, '%d, %d\n', j, bins(j));
    end
    fclose(currentresfid);
end

allresfid = fopen('heatmap/csv/all.csv', 'wt');
for j=1:numel(allbins)
    fprintf(allresfid, '%d, %d\n', j, allbins(j));
end
fclose(allresfid);

likeabilityoneresfid = fopen('heatmap/csv/likeability_1.csv', 'wt');
likeabilitytworesfid = fopen('heatmap/csv/likeability_2.csv', 'wt');
likeabilitythreeresfid = fopen('heatmap/csv/likeability_3.csv', 'wt');
likeabilityfourresfid = fopen('heatmap/csv/likeability_4.csv', 'wt');
likeabilityfiveresfid = fopen('heatmap/csv/likeability_5.csv', 'wt');
for j=1:numel(likeabilityonebins)
    fprintf(likeabilityoneresfid, '%d, %d\n', j, likeabilityonebins(j));
end
fclose(likeabilityoneresfid);
for j=1:numel(likeabilitytwobins)
    fprintf(likeabilitytworesfid, '%d, %d\n', j, likeabilitytwobins(j));
end
fclose(likeabilitytworesfid);
for j=1:numel(likeabilitythreebins)
    fprintf(likeabilitythreeresfid, '%d, %d\n', j, likeabilitythreebins(j));
end
fclose(likeabilitythreeresfid);
for j=1:numel(likeabilityfourbins)
    fprintf(likeabilityfourresfid, '%d, %d\n', j, likeabilityfourbins(j));
end
fclose(likeabilityfourresfid);
for j=1:numel(likeabilityfivebins)
    fprintf(likeabilityfiveresfid, '%d, %d\n', j, likeabilityfivebins(j));
end
fclose(likeabilityfiveresfid);

resultsfid = fopen('results.csv','wt') ;
fprintf(resultsfid, 'Image, PrimaryEmotion, PrimaryIntensity, SecondaryEmotion, SecondaryIntensity, Likability, Artist Name\n');
image_theta_and_intensity = containers.Map('KeyType', 'char', 'ValueType', 'any');
likeability_one_emotion_data = [];
likeability_two_emotion_data = [];
likeability_three_emotion_data = [];
likeability_four_emotion_data = [];
likeability_five_emotion_data = [];
likeability_one_intensity = [];
likeability_two_intensity = [];
likeability_three_intensity = [];
likeability_four_intensity = [];
likeability_five_intensity = [];
for i=1:numel(results.keys)
    emotion_data = [];
    I_i = [];
    tempres = results.keys;
    currentImageName = tempres{i};
    currentImageScores = results(currentImageName);
    rows = size(results(currentImageName), 1);
    for j=1:rows
        fprintf(resultsfid, '%s, %s, %d, %s, %d, %d, %s\n', currentImageName, currentImageScores{j, 1}, currentImageScores{j, 2}, currentImageScores{j, 3}, currentImageScores{j, 4}, currentImageScores{j,5},currentImageScores{j,6});
        [primaryEmotNonNeutral,primaryemotIdx] = ismember(currentImageScores{j, 1}, f_emotion_name);
        [secondaryEmotNonNeutral,secondaryemotIdx] = ismember(currentImageScores{j, 3}, f_emotion_name);
        emotion_data = [emotion_data primaryemotIdx secondaryemotIdx];
        likeability = currentImageScores{j,5};
        switch likeability
            case 1
                likeability_one_emotion_data = [likeability_one_emotion_data primaryemotIdx secondaryemotIdx];
                likeability_one_intensity = [likeability_one_intensity currentImageScores{j, 2} currentImageScores{j, 4}];
            case 2
                likeability_two_emotion_data = [likeability_two_emotion_data primaryemotIdx secondaryemotIdx];
                likeability_two_intensity = [likeability_two_intensity currentImageScores{j, 2} currentImageScores{j, 4}];
            case 3
                likeability_three_emotion_data = [likeability_three_emotion_data primaryemotIdx secondaryemotIdx];
                likeability_three_intensity = [likeability_three_intensity currentImageScores{j, 2} currentImageScores{j, 4}];
            case 4
                likeability_four_emotion_data = [likeability_four_emotion_data primaryemotIdx secondaryemotIdx];
                likeability_four_intensity = [likeability_four_intensity currentImageScores{j, 2} currentImageScores{j, 4}];
            case 5
                likeability_five_emotion_data = [likeability_five_emotion_data primaryemotIdx secondaryemotIdx];
                likeability_five_intensity = [likeability_five_intensity currentImageScores{j, 2} currentImageScores{j, 4}];
            otherwise
        end
        I_i = [I_i currentImageScores{j, 2} currentImageScores{j, 4}];
        artistName = currentImageScores{j, 6};
    end
    I_i = I_i';
    emotion_data = emotion_data';
    %graphs
    x = figure('visible', 'off');

    x.Position = [10 10 800 600];
    th_i = emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    I_i(id) = [];
    
        fname_prefix = split(currentImageName, '/');
    fname_prefix = split(fname_prefix{2}, '.');
    fname_prefix = fname_prefix{1};
    artistName = strrep(artistName, ' ', '_');
    
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title(strcat(string([artistName ' ('  currentImageName ')'])), 'Interpreter', 'none');
    n = length(emotion_data);
    
    savefig(x, sprintf('figures/hist_%s_%s.fig', num2str(fname_prefix), artistName)); 
    % save as png
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%s.png', num2str(fname_prefix), artistName));
    % clear the figure 
    clf(x); 
    delete(x);

    [x,y] = pol2cart(th_i, I_i);

    X_e = sum(I_i .* cos(th_i))./n;
    Y_e = sum(I_i .* sin(th_i))./n;

    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);

    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, I_i, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])

    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title(strcat(string([artistName ' ('  currentImageName ')'])), 'Interpreter', 'none');

    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));


    weighted_circular_variance = 1-sum(I_i.*cos((anglediff(th_e,th_i))))/sum(I_i);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;

    degrees_variance = rad2deg(acos(sum(I_i.*cos((anglediff(th_e,th_i))))/sum(I_i)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;

    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);

    mean_intensity = I_e;

    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    
    fname_prefix = split(currentImageName, '/');
    fname_prefix = split(fname_prefix{2}, '.');
    fname_prefix = fname_prefix{1};
    artistName = strrep(artistName, ' ', '_');

    savefig(f, sprintf('figures/dominant_emotion_%s_%s.fig', num2str(fname_prefix), artistName)); 
    % save as png
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%s.png', num2str(fname_prefix), artistName));
    % clear the figure 
    clf(f); 
    delete(f)
end
fclose(resultsfid);

% likeability figures 

likeability_one_emotion_data = likeability_one_emotion_data';
likeability_two_emotion_data = likeability_two_emotion_data';
likeability_three_emotion_data = likeability_three_emotion_data';
likeability_four_emotion_data = likeability_four_emotion_data';
likeability_five_emotion_data = likeability_five_emotion_data';
likeability_one_intensity = likeability_one_intensity';
likeability_two_intensity = likeability_two_intensity';
likeability_three_intensity = likeability_three_intensity';
likeability_four_intensity = likeability_four_intensity';
likeability_five_intensity = likeability_five_intensity';

    x = figure('visible', 'off');
    x.Position = [10 10 800 600];
    th_i = likeability_one_emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    likeability_one_intensity(id) = [];
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title('Likeability: 1', 'Interpreter', 'none');
    n = length(likeability_one_emotion_data);
    savefig(x, sprintf('figures/hist_%s_%d.fig', 'likeability', 1)); 
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%d.png', 'likeability', 1));
    clf(x); 
    delete(x);
    [x,y] = pol2cart(th_i, likeability_one_intensity);
    X_e = sum(likeability_one_intensity .* cos(th_i))./n;
    Y_e = sum(likeability_one_intensity .* sin(th_i))./n;
    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);
    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, likeability_one_intensity, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title('Likeability: 1', 'Interpreter', 'none');
    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));
    weighted_circular_variance = 1-sum(likeability_one_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_one_intensity);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;
    degrees_variance = rad2deg(acos(sum(likeability_one_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_one_intensity)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;
    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);
    mean_intensity = I_e;
    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    savefig(f, sprintf('figures/dominant_emotion_%s_%d.fig', 'likeability', 1)); 
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%d.png', 'likeability', 1));
    clf(f); 
    delete(f)
    
    x = figure('visible', 'off');
    x.Position = [10 10 800 600];
    th_i = likeability_two_emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    likeability_two_intensity(id) = [];
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title('Likeability: 2', 'Interpreter', 'none');
    n = length(likeability_two_emotion_data);
    savefig(x, sprintf('figures/hist_%s_%d.fig', 'likeability', 2)); 
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%d.png', 'likeability', 2));
    clf(x); 
    delete(x);
    [x,y] = pol2cart(th_i, likeability_two_intensity);
    X_e = sum(likeability_two_intensity .* cos(th_i))./n;
    Y_e = sum(likeability_two_intensity .* sin(th_i))./n;
    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);
    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, likeability_two_intensity, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title('Likeability: 2', 'Interpreter', 'none');
    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));
    weighted_circular_variance = 1-sum(likeability_two_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_two_intensity);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;
    degrees_variance = rad2deg(acos(sum(likeability_two_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_two_intensity)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;
    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);
    mean_intensity = I_e;
    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    savefig(f, sprintf('figures/dominant_emotion_%s_%d.fig', 'likeability', 2)); 
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%d.png', 'likeability', 2));
    clf(f); 
    delete(f)
    
    x = figure('visible', 'off');
    x.Position = [10 10 800 600];
    th_i = likeability_three_emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    likeability_three_intensity(id) = [];
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title('Likeability: 3', 'Interpreter', 'none');
    n = length(likeability_three_emotion_data);
    savefig(x, sprintf('figures/hist_%s_%d.fig', 'likeability', 3)); 
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%d.png', 'likeability', 3));
    clf(x); 
    delete(x);
    [x,y] = pol2cart(th_i, likeability_three_intensity);
    X_e = sum(likeability_three_intensity .* cos(th_i))./n;
    Y_e = sum(likeability_three_intensity .* sin(th_i))./n;
    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);
    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, likeability_three_intensity, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title('Likeability: 3', 'Interpreter', 'none');
    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));
    weighted_circular_variance = 1-sum(likeability_three_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_three_intensity);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;
    degrees_variance = rad2deg(acos(sum(likeability_three_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_three_intensity)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;
    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);
    mean_intensity = I_e;
    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    savefig(f, sprintf('figures/dominant_emotion_%s_%d.fig', 'likeability', 3)); 
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%d.png', 'likeability', 3));
    clf(f); 
    delete(f)
    
    x = figure('visible', 'off');
    x.Position = [10 10 800 600];
    th_i = likeability_four_emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    likeability_four_intensity(id) = [];
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title('Likeability: 4', 'Interpreter', 'none');
    n = length(likeability_four_emotion_data);
    savefig(x, sprintf('figures/hist_%s_%d.fig', 'likeability', 4)); 
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%d.png', 'likeability', 4));
    clf(x); 
    delete(x);
    [x,y] = pol2cart(th_i, likeability_four_intensity);
    X_e = sum(likeability_four_intensity .* cos(th_i))./n;
    Y_e = sum(likeability_four_intensity .* sin(th_i))./n;
    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);
    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, likeability_four_intensity, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title('Likeability: 4', 'Interpreter', 'none');
    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));
    weighted_circular_variance = 1-sum(likeability_four_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_four_intensity);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;
    degrees_variance = rad2deg(acos(sum(likeability_four_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_four_intensity)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;
    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);
    mean_intensity = I_e;
    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    savefig(f, sprintf('figures/dominant_emotion_%s_%d.fig', 'likeability', 4)); 
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%d.png', 'likeability', 4));
    clf(f); 
    delete(f)
    
    x = figure('visible', 'off');
    x.Position = [10 10 800 600];
    th_i = likeability_five_emotion_data*2*pi/total_emotions - pi/total_emotions;
    id = find(isnan(th_i));
    th_i(id) = [];
    likeability_five_intensity(id) = [];
    h = polarhistogram(th_i,0:2*pi/total_emotions:2*pi,'Normalization','probability');
    rlim([0 max(h.Values)*1.2]);
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    title('Likeability: 5', 'Interpreter', 'none');
    n = length(likeability_five_emotion_data);
    savefig(x, sprintf('figures/hist_%s_%d.fig', 'likeability', 5)); 
    print(x,'-dpng','-r300', sprintf('figures/hist_%s_%d.png', 'likeability', 5));
    clf(x); 
    delete(x);
    [x,y] = pol2cart(th_i, likeability_five_intensity);
    X_e = sum(likeability_five_intensity .* cos(th_i))./n;
    Y_e = sum(likeability_five_intensity .* sin(th_i))./n;
    th_e = atan2(Y_e, X_e);
    I_e = sqrt(X_e^2 + Y_e^2);
    f = figure('visible', 'off');  
    f.Position = [10 10 800 600]; 
    polarscatter(th_i, likeability_five_intensity, '+');
    tick = 360/total_emotions;
    thetaticks([tick/2:tick:360-tick/2]);
    thetaticklabels(["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"])
    hold on
    polarplot([0 th_e], [0 I_e], '->')
    title('Likeability: 5', 'Interpreter', 'none');
    weighted_circular_mean = wrapTo2Pi(th_e);
    unweighted_circular_mean = wrapTo2Pi(atan2(sum(sin(th_i)), sum(cos(th_i))));
    weighted_circular_variance = 1-sum(likeability_five_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_five_intensity);
    unweighted_circular_variance = 1-sum(cos((anglediff(unweighted_circular_mean,th_i))))/n;
    degrees_variance = rad2deg(acos(sum(likeability_five_intensity.*cos((anglediff(th_e,th_i))))/sum(likeability_five_intensity)));
    estimated_emotion = weighted_circular_mean*total_emotions/(2*pi);
    emotion_variance = degrees_variance*total_emotions/360;
    unweighted_radians_variance = acos(sum(cos((anglediff(unweighted_circular_mean,th_i))))/n);
    unweighted_emotion_variance = unweighted_radians_variance*total_emotions/(2*pi);
    mean_intensity = I_e;
    th_e_str = strcat('\theta_e =', string(estimated_emotion));
    I_e_str = strcat('I_e =', string(I_e));
    V_e_str = strcat('V_e =', string(emotion_variance));
    point_on_graph = [(cos(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e) (sin(deg2rad(estimated_emotion * 360.0 / 20.0)) * I_e)];
    image_theta_and_intensity(currentImageName) = point_on_graph;
    h(1) = polarplot(NaN,NaN,'or');
    h(2) = polarplot(NaN,NaN,'ob');
    h(3) = polarplot(NaN,NaN,'ok');
    legend(h, th_e_str,I_e_str,V_e_str);
    savefig(f, sprintf('figures/dominant_emotion_%s_%d.fig', 'likeability', 5)); 
    print(f,'-dpng','-r300', sprintf('figures/dominant_emotion_%s_%d.png', 'likeability', 5));
    clf(f); 
    delete(f)


emotlabels = ["joyful", "strong", "heroic", "energetic", "stimulated", "agitated", ...
              "tense", "anxiety", "uncertainty", "tragic", "unease", ...
              "heavy", "sad", "gloomy", "melancholy", "serene", "tenderness", ...
              "dreamy", "filled with wonder", "in awe"];
lobefolders = fopen('lobe_folder_arrangement.txt','wt') ;
for i=1:20
    for j=1:5
        emotDeg = i*2*pi/20 - pi/20;
        emotPoint = [(cos(emotDeg) * j) (sin(emotDeg) * j)];
        distances = [];
        for k=1:numel(image_theta_and_intensity.keys)
            temp_t_i = image_theta_and_intensity.keys;
            current_image_name = temp_t_i{k};
            current_image_res = image_theta_and_intensity(current_image_name);
            dist = norm(current_image_res - emotPoint);
            distances = [distances; dist k];
        end
        closest_sorted = sortrows(distances);
        closest_sorted = fliplr(closest_sorted);
        [cs_rows cs_cols] = size(closest_sorted);
        fprintf(lobefolders, '\n************\n');
        fprintf(lobefolders, '\n------\n'); 
        fprintf(lobefolders, 'emotion: %s, intensity: %d',emotlabels(i), j);
        fprintf(lobefolders, '\n------\n\n'); 
        for k=1:cs_rows
            temp_t_i = image_theta_and_intensity.keys;
            current_image_name = temp_t_i{closest_sorted(k)};
            fprintf(lobefolders, '%d. %s\n', k, current_image_name); 
        end
        fprintf(lobefolders, '\n------\n');
        fprintf(lobefolders, '\n************\n');
    end
end
fclose(lobefolders);

sfid = fopen('sanity_checks.txt', 'wt');
for num_imgs_per_lobe_folder = 1:40
    are_all_images_used_sanity_check = containers.Map('KeyType', 'char', 'ValueType', 'any');
    fprintf(sfid, '\n------\n');
    fprintf(sfid, '\n number of images per folder: %d \n', num_imgs_per_lobe_folder);
    for i=1:20
        for j=1:5
            emotDeg = i*2*pi/20 - pi/20;
            emotPoint = [(cos(emotDeg) * j) (sin(emotDeg) * j)];
            distances = [];
            for k=1:numel(image_theta_and_intensity.keys)
                temp_t_i = image_theta_and_intensity.keys;
                current_image_name = temp_t_i{k};
                current_image_res = image_theta_and_intensity(current_image_name);
                dist = norm(current_image_res - emotPoint);
                distances = [distances; dist k];
            end
            closest_sorted = sortrows(distances);
            closest_sorted = fliplr(closest_sorted);
            [cs_rows cs_cols] = size(closest_sorted);
            for k=1:cs_rows
                temp_t_i = image_theta_and_intensity.keys;
                current_image_name = temp_t_i{closest_sorted(k)};
                if(k <= num_imgs_per_lobe_folder)
                    are_all_images_used_sanity_check(current_image_name) = 1;
                end 
            end
        end
    end
    if(numel(are_all_images_used_sanity_check.keys) ~= numel(results.keys))
        fprintf(sfid, 'sanity check does not pass for %d images per folder, # of items used: %d out of %d\n', num_imgs_per_lobe_folder,  numel(are_all_images_used_sanity_check.keys), numel(results.keys)); 
        fprintf(sfid, 'images that are not included are:\n'); 
        for i = 1:numel(results.keys)
            tempkeys = results.keys;
            current_key = tempkeys{i};
            if(isKey(are_all_images_used_sanity_check, current_key) ~= 1)
                fprintf(sfid, ' %s\n', current_key); 
            end
        end
        fprintf(sfid, '\n------\n'); 
    else
        fprintf(sfid, 'sanity check OK for %d images per folder, # of items used: %d out of %d\n',num_imgs_per_lobe_folder,  numel(are_all_images_used_sanity_check.keys), numel(results.keys)); 
        fprintf(sfid, '\n------\n');
    end
end
fclose(sfid);
toc;
return;
