var gitProfile = [
{
  name: "Will Gallup",
  avatar_URL: "https://avatars.githubusercontent.com/u/7799207?v=2",
  followers: 6,
  folliwing: 0,
  repos: 14
},
{
  name: "Ansley Jones",
  avatar_URL: "https://avatars.githubusercontent.com/u/8247044?v=2",
  followers: 8,
  folliwing: 9,
  repos: 6
},
{
  name: "Chris Rotten",
  avatar_URL:"https://avatars.githubusercontent.com/u/8238886?v=2",
  followers: 9,
  folliwing: 40,
  repos: 6
},
{
  name: "Charles Nguyen",
  avatar_URL: "https://avatars.githubusercontent.com/u/8241367?v=2",
  followers: 7,
  folliwing: 16,
  repos: 9
},
{
  name: "Andrew Levy",
  avatar_URL: "https://avatars.githubusercontent.com/u/8238273?v=2",
  followers: 4,
  folliwing: 0,
  repos: 8
}
];

/*

  <div class="gitProfiles">
    <img src="#">
      <h2>Name</h2>
        <ul>
          <li>followers</li>
          <li>following</li>
          <li>repos</li>
        </ul>

</div>
  */


$(document).ready(function(){

  var myGitFunction = function(myArray, $target){
    var emptyString = "";
      for (var i = 0; i < myArray.length; i++) {
        emptyString += "<div class=\"gitProfiles\">"
        + "<img src=\"" + myArray[i].avatar_URL + "\">"
        + "<h2>" + myArray[i].name + "</h2>"
        + "<ul>"
        + "<li>" + "Followers: " + myArray[i].followers + "</li>"
        + "<li>" + "Following: " + myArray[i].following + "</li>"
        + "<li>" + "Repositories: " + myArray[i].repos + "</li>"
        + "</ul>"
        + "</div>"


        }

        $target.append(emptyString);
        }


      myGitFunction(gitProfile, $(".container"));

});
