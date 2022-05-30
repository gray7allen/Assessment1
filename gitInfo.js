/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'version control software that helps the development process by making collaboration, backing up code, and version control much smoother' //'Git is a DevOps tool'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'website where you can push git repositories and share them' //'GitHub is a code hosting platform'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description: 'Creates a new Git Repository',
    code: 'git init',
}
//console.log(init)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description:'copies an existing repository at the specified location',         //'Copies an object properties to another object'
    code:"git clone <URL>", //'Create const cloneObjectName = Object.assign({}, ObjectName)'
}
//console.log(clone)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: 'Displays the state of the wokring directory and the staging area',
    code: 'git status',
}
//console.log(status)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: 'Adds a change in the wokring directory to the staging area',
    code: 'git add .',
}
//console.log(add)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: 'Puts your changes into your local repository',
    code: 'git commit -m "message"',
}
//console.log(commit)

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: 'Used to upload your local repository changes to a remote repository',
    code: 'git push',
}
//console.log(push)