Do exactly the same below using the below code and the transcript of the video organize and write it in a very simple way for beginners in .md format for github
Use the transcript but don't put timestamps or reference to it's reference being used

Define the below for each one and use the examples for each the represents each scope from below. Don't forget to mention the scope name and also if it has another name like global/local. use the transcript while proccessing but don't use any reference to it it like mentioning you took it from a transcript but use the transcript for infromation and so in the out put make each seperately in sections and use the provided links as well for full infromation incorprate where necessary and exclude if it's repetitive. It's Very very important to use a simple language when explaining but it has to be very clear for beginners. Use the link below to incorporate code, examples and any information and code that's benefetial and not repetitive

https://hackyourfuture.github.io/study/#/javascript/scope

Scope means area, space, or region.
Global scope means global space or a public space.
Local scope means a local region or a restricted region.

1.  //These variables are SCOPED to the function
    function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
    }
    // These variables are SCOPED to changeColor()
    function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
    }
    lol();
    changeColor();
    age; //DOES NOT EXIST!
    color; //DOES NOT EXIST!
    person; //DOES NOT EXIST!

let bird = 'mandarin duck';

function birdWatch() {
//this bird is scoped to birdWatch()
let bird = 'golden pheasant';
console.log(bird); //"golden pheasant"
}
birdWatch();
console.log(bird); //"mandarin duck"

[00:00.000 --> 00:03.280] The next new feature we'll take a look at is called spread.
[00:03.280 --> 00:07.120] And the first thing you should know about spread is that like every other feature we're seeing
[00:07.120 --> 00:12.240] in this section, it's not supported in internet exporter. However, that shouldn't stop you from
[00:12.240 --> 00:18.800] using it. So spread is extremely useful, but it's also not that easy to explain because it does
[00:18.800 --> 00:24.080] many things, depending on the context. This is the official definition from MDN. I guess it's not
[00:24.080 --> 00:29.040] official, but this is the MDN definition. Spread syntax allows an iterable such as an array to be
[00:29.040 --> 00:34.400] expanded in places where zero or more arguments for function calls or elements for array literals
[00:34.400 --> 00:38.640] are expected, or an object's expression to be expanded in places where zero or more key value
[00:38.640 --> 00:43.760] pairs for object literals are expected. You got it? Okay, so I think that's good enough, right?
[00:43.760 --> 00:49.360] You understand at this point? Yeah, I know, very funny cult. There's a lot to spread. The key
[00:49.360 --> 00:55.120] word that I bolded here is expanded. So in all scenarios, there's really three use cases.
[00:55.120 --> 01:00.880] Spread in a function call spread in array literals and spread in object literals. It all has to
[01:00.880 --> 01:09.200] do with expanding some iterable into some other place, some destination. So the word spread is a
[01:09.200 --> 01:13.280] nice choice, I think, because that's kind of what we're doing. We're spreading, we're expanding
[01:13.280 --> 01:18.720] something. What I'm going to do is break it up into three videos, one for each of the use cases.
[01:18.800 --> 01:25.360] And the first one we'll see is spread in a function call. So spread syntactically is always
[01:25.360 --> 01:31.360] three dots here when we're using a function call here in an array literal three dots here in an
[01:31.360 --> 01:36.320] object three dots, always three dots, but they mean something different or they they behave
[01:36.320 --> 01:40.800] differently depending on where you use it. At the end of the day, it all has to do with expanding
[01:40.800 --> 01:46.000] an iterable, meaning an array, a string, there are many other iterables, but those are the two main
[01:46.000 --> 01:51.200] ones we've worked with expanding them into some other destination. And when we use it in a
[01:51.200 --> 01:57.520] function call inside the parentheses, it will take that iterable and break it up into individual
[01:57.520 --> 02:04.560] arguments rather than passing in a single argument. So the example I use with math was math dot max,
[02:05.440 --> 02:12.880] which accepts multiple arguments. Here's a bunch of arguments I just passed in.
[02:13.040 --> 02:20.800] And it returns the max. So in this case, the maximum argument was 99. There's also math dot min,
[02:21.600 --> 02:26.880] which does the same thing except the other way around. It tells me the smallest argument was three.
[02:27.520 --> 02:32.960] But this only works if you pass them in as separate arguments. If we have a list of numbers
[02:33.680 --> 02:40.480] or an array of numbers, it will not work. It treats it as one argument. And if I do math dot max
[02:40.480 --> 02:48.640] of numbs, I get not a number. It expects each argument to be a number. This argument that we
[02:48.640 --> 02:53.680] passed in is not a number. It's a list of numbers, but itself is not a number. So it does not work.
[02:54.640 --> 03:00.720] Instead, we can use spread. So spread allows us to break this up into five separate arguments.
[03:00.720 --> 03:07.120] It's the equivalent of passing in 45 comma 33, basically stripping away the array brackets.
[03:07.120 --> 03:14.480] So this is what it looks like dot dot dot numbs. Just like that, we are spreading this iterable
[03:15.120 --> 03:26.000] into individual arguments. So again, it's just like doing this. 45, 23, 34, 7 and 5. And we get 45.
[03:27.200 --> 03:33.520] So to show you the other side of it, if you wanted to write a function, let's call ours give me four.
[03:34.480 --> 03:39.440] And this is going to be a useless function, but it wants four arguments, so a, b, c, and d.
[03:40.400 --> 03:46.160] And then we'll just console dot log each one of them. I'll do it like this, a comma a,
[03:46.160 --> 03:52.720] and then duplicate this a couple times and then update this to be b and then do the same thing for c
[03:52.720 --> 03:58.720] and d. All right, so it's going to print out the arguments that we get. Give me four. I'll pass in
[03:58.720 --> 04:05.600] four numbers, four, five, six, and seven. And we see a is four, b is five, c is six, and d is seven.
[04:06.160 --> 04:14.560] If I had an array of numbers or an array of anything, let's go with const colors. We'll have red, orange,
[04:15.600 --> 04:26.800] yellow, and green. If I call, give me four, and I pass in colors, we're only passing in one argument.
[04:26.800 --> 04:32.800] So you see what we get, a is set to this whole array, b is undefined, c and d are also undefined.
[04:33.440 --> 04:40.800] But if I instead use spread one, two, three dots, we're now spreading that entire array into separate
[04:40.800 --> 04:47.040] arguments. So now those array braces are essentially gone from the function call. We don't change the
[04:47.040 --> 04:53.280] array in any way. Colors is exactly the same as it always was, but when we pass those values in,
[04:53.280 --> 04:59.520] they now are four arguments. So a is red, b is orange, c is yellow, and d is green. And if we had
[04:59.520 --> 05:04.800] more arguments, right now, our function doesn't handle them. It only wants four, but if we had
[05:04.800 --> 05:09.680] colors that had 10 things in there, each one would be passed as an argument. We just wouldn't be
[05:09.680 --> 05:15.120] using it in the function. But shortly in this section, we'll see how to write a function that accepts
[05:15.120 --> 05:20.240] any number of arguments. Right now, we're having to hard code how many we want. This is four.
[05:20.240 --> 05:25.840] If I want five arguments, then I need to add in another parameter. But we'll see how we can add in
[05:25.840 --> 05:32.240] n number and collect all arguments in a single array or a single structure that's coming up soon.
[05:32.240 --> 05:37.760] The other thing about spread is that it's not only applicable to arrays. So we could also do something
[05:37.760 --> 05:46.000] like this. Let me make some space here. If I have a string, const, we'll just call it str equals
[05:46.080 --> 05:53.600] how about goats like that? If I spread a string, a string is actually an iterable. What do you
[05:53.600 --> 06:02.560] expect to happen here? If I call give me four dot dot dot str, it passes each character as its
[06:02.560 --> 06:08.400] own argument. It iterates over this and it's iterable. We've done it before. You iterate one
[06:08.400 --> 06:14.000] character at a time and you end up with one character, g being the first argument, then the second,
[06:14.000 --> 06:19.520] then the third, then the fourth. You can think of it as just like this. Each value or each character
[06:19.520 --> 06:24.800] is passed as its own argument and we would get the same result if we did it this way. Give me four.
[06:26.480 --> 06:32.160] But the main difference is that this sucks the type and this is hard coded. If we use spread,
[06:32.160 --> 06:36.720] this could be 20 characters. It could be two characters. It's not that common that you spread
[06:36.720 --> 06:41.440] strings at least in my experience compared to arrays. But whatever you're spreading,
[06:41.440 --> 06:47.680] when you spread it into a function call that iterable is iterated over, each element is passed
[06:47.680 --> 06:59.280] as a standalone separate argument. So that's the first use case for spread. We have two more to go.

//

// 2.
// let & const are BLOCK SCOPED
if (true) {
const animal = 'eel';
console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!

// VAR IS NOT BLOCK SCOPED
if (true) {
var animal = 'eel';
console.log(animal); //'eel'
}
console.log(animal); //'eel'

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
// console.log(i, animals[i])
// }
// console.log(i)

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// let i = 10;
// for (let i = 0; i < animals.length; i++) {
// console.log(i, animals[i])
// }
// console.log(i)

function doubleArr(arr) {
const result = []; //scoped to the doubleArr function
for (let num of arr) {
let double = num \* 2; //scoped to this loop
result.push(double);
}
return result;
}

[00:00.000 --> 00:04.480] Welcome back. Now that we've seen the very basics of functions and their syntax,
[00:04.480 --> 00:09.360] arguments, return values, et cetera, we're now going to talk about some other details.
[00:09.360 --> 00:14.400] Some important things needs to know about functions and function adjacent topics.
[00:14.400 --> 00:19.280] So this section is not really one monolithic topic, but a couple of related things that I've
[00:19.280 --> 00:25.040] put together into one section. So we have a couple goals. The first is to understand scope.
[00:25.600 --> 00:30.960] When I introduced Latin const and briefly talked about var, I mentioned we would come back and
[00:30.960 --> 00:36.000] discuss scope and how those different keywords impact scope. We're going to start by talking
[00:36.000 --> 00:41.040] about that in this section. It does relate to functions. Then we'll talk a lot about higher order
[00:41.040 --> 00:47.120] functions functions as a value in JavaScript, how we can pass functions to other functions.
[00:47.120 --> 00:52.640] We'll take a look at some existing built in functions and methods that expect you to pass a
[00:52.640 --> 00:57.680] function as an argument, and that's our main goal or goals for this section. So we're going to
[00:57.680 --> 01:05.280] start with scope. Scope is kind of like variable visibility. It's this idea that depending on where
[01:05.280 --> 01:11.120] you define a variable, other pieces of your code may or may not have access to that value.
[01:11.120 --> 01:17.200] And a variable scope is that window. It's the portion of your code where other values have access
[01:17.200 --> 01:22.480] to it or other functions or other pieces of the code can access and manipulate that value.
[01:23.040 --> 01:27.440] So there's multiple pieces, different ways that scope behaves in JavaScript. And that's what we're
[01:27.440 --> 01:32.800] going to talk about in the next few videos. And the first type of scope is called function scope.
[01:33.760 --> 01:38.160] So when we define a variable in a function like I have right here, it doesn't matter what the
[01:38.160 --> 01:44.480] function is. It's called help me. We have a variable called message. I'm on fire. Inside the function,
[01:44.480 --> 01:50.480] of course, we have access to message. If I were to log it or just get the value, it's I'm on fire.
[01:50.480 --> 01:55.760] But outside the bound to that function, we don't have access. I get an error if I try and access
[01:55.760 --> 02:00.880] message down here. It is scoped to this function. That's what this box is representing.
[02:01.840 --> 02:06.800] So this probably makes sense and you may have encountered this already. If you're brand new,
[02:06.800 --> 02:10.480] you might have played around still. If we have some function, it doesn't matter what it's called.
[02:10.480 --> 02:18.160] Let's just go with LOL. And then I define some variable in there. Let person equals Tom.
[02:19.120 --> 02:28.720] And then let's also do one with const const age equals 45. And let's do one with var. So var color equals
[02:28.720 --> 02:36.000] teal. Okay. So we have three variables going on. If I try and access any of them outside of this
[02:36.000 --> 02:42.800] LOL function, like let's start with person, console dot log person. We're not going to have a good
[02:42.800 --> 02:48.880] time. Person is not defined. And you might think, well, maybe if you call LOL, then those variables
[02:48.880 --> 02:53.760] will be they'll come into existence. Right now we're defining that function, but this code is not
[02:53.760 --> 03:01.680] executing. So if I execute it first, same problem. Person is scoped to this function. LOL. I have
[03:01.680 --> 03:07.360] access to it in here, of course, but not outside. And if I tried that instead with age, which is
[03:07.360 --> 03:13.840] defined with const same error. And if I try it with color, which is defined with var, once again,
[03:13.840 --> 03:19.520] we get the exact same error just for a different name for a variable person agent color. None of
[03:19.520 --> 03:24.480] these exist outside the bounds of this function. They're scoped to it. So this means that we can
[03:24.480 --> 03:30.160] have multiple functions that have similar or the same variable names. I could have another function.
[03:30.160 --> 03:37.920] We'll call this one change color. And I'll set a variable called color. Let's go with let color
[03:38.720 --> 03:46.000] equals and this time it will be purple. And we can also have let's do another age. We'll do const
[03:46.000 --> 03:54.960] age equals 19. And we'll console dot log one of them. Let's console dot log age here. And let's
[03:54.960 --> 04:02.320] also do it here console dot log age. And then we'll call LOL and we'll call change color.
[04:04.320 --> 04:10.560] Okay, rid of this console dot log at the bottom. You can see we get unique values in this context
[04:10.560 --> 04:18.160] age is 45. And this context age is 19. So they are scoped. Those variables that we declared in
[04:18.160 --> 04:24.080] a given function are scoped to that function. They are visible only in here. After the fact,
[04:24.080 --> 04:30.000] we can call the function, but we cannot access or manipulate those variables from down here or
[04:30.000 --> 04:38.000] up top. We are not in the same scope. Here's another example. This time I have a variable called bird
[04:38.000 --> 04:42.640] that I've defined up top or it could be down below. It doesn't matter where it's defined, but
[04:42.640 --> 04:49.040] I have bird. And then I have another let bird inside this function. So now I have two variables
[04:49.040 --> 04:54.800] with the exact same name. And remember, if I try and do that in the same scope, like let high
[04:54.800 --> 05:03.680] equals high. And then let high equal three, I get an error. It's telling me high has already been
[05:03.680 --> 05:08.720] declared. So it's not saying high has already been declared anywhere in your code. You can only
[05:08.720 --> 05:14.400] have one high. It's more along the lines of high has been declared in this scope. You cannot have
[05:14.400 --> 05:20.080] another high declared in the same scope. But we can do it like this. We can have one variable with
[05:20.080 --> 05:26.160] one name outside this function and another variable with the exact same name in the function.
[05:27.280 --> 05:32.240] Compare that to what we had up top. It was the same idea. We had age in one function in
[05:32.240 --> 05:37.520] age in a different function, different scopes. So we have different scopes here. Two beautiful birds,
[05:37.520 --> 05:42.160] by the way, if you ever want to Google what these look like. Oh, Mandarin ducks, golden fesins,
[05:42.160 --> 05:47.200] really pretty birds. Let's console dot log bird down here. And let's do the same thing at the
[05:47.200 --> 05:53.280] very bottom. Run my code. Well, right now I'm not executing bird watch. But here bird is set to
[05:53.280 --> 06:02.480] Mandarin duck. Let's call bird watch. Now we get bird watch, which runs console dot log golden
[06:02.480 --> 06:09.360] fesin. It's finding the nearest bird, which is in this scope. Then we console dot log bird outside
[06:09.440 --> 06:14.560] the function bird is set to Mandarin duck. So this diagram kind of explains this scenario.
[06:15.200 --> 06:19.680] Here we have two scopes. We have the orange or yellow box, which represents the scope of this
[06:19.680 --> 06:26.160] function bird, where it's set to golden fesin is only accessible in bird watch. But then we have
[06:26.160 --> 06:32.080] this larger scope where bird, the first bird was declared outside the function. So it's pink box
[06:32.080 --> 06:37.520] extends down below as well. And that's pretty much all I wanted to show you in this video. In this
[06:37.520 --> 06:43.120] context, let and const will behave the same way. If I updated both let's to instead be const
[06:44.160 --> 06:50.480] and run this, we get the same output. If I update them to both be var, we get the same output as
[06:50.480 --> 06:55.280] well. But in the next video, we'll see a very significant difference between how let and const
[06:55.280 --> 07:00.640] behave and how var behaves in certain scenarios. So we have more scope to talk about that's next.

[00:00.000 --> 00:04.960] In the last video, we talked about function scope where if we declare variable with any keyword,
[00:04.960 --> 00:10.880] whether it's let, const, or var within a given function, it is scoped to that function. We don't
[00:10.880 --> 00:15.680] have access to it outside that function. Now we're going to see a different type of scope,
[00:15.680 --> 00:20.480] which is called block scope. And it doesn't necessarily have to do with functions, at least not
[00:20.480 --> 00:25.440] directly, but I did mention at the beginning of the section, we would cover some function adjacent
[00:25.440 --> 00:29.760] content. And if you think back to one of the very first videos in the course when I introduced
[00:29.760 --> 00:36.000] let and const and also var, I said we would come back later on. That's right now to discuss one
[00:36.000 --> 00:42.240] of the main distinctions between let and const compared to var. So this is it block scope. This is
[00:42.240 --> 00:48.400] a very, very important concept around how variables work in JavaScript. So let's start with a simple
[00:48.400 --> 00:56.080] example. Here's a conditional if true. It's always going to run whatever code is in here. Let's
[00:56.080 --> 01:04.640] declare a variable called animal and set it equal to eel. If I console that log animal outside
[01:04.640 --> 01:12.720] this block, what do you expect? What will be printed out? Let's try it. Nothing we get an error.
[01:12.800 --> 01:19.040] Animal is not defined. So what does this tell us? It tells us that animal is scoped inside
[01:19.040 --> 01:24.480] this conditional. It is scoped to this block of code. Blocks in JavaScript are denoted by
[01:24.480 --> 01:31.280] curly braces. Keep in mind, this is very different than an object literal, which is also curly
[01:31.280 --> 01:37.600] braces. This is an object. This up here is a block. So same thing if we had a while loop,
[01:37.600 --> 01:42.800] if we had a for loop or a for of those are all blocks. The code we write between the curly
[01:42.800 --> 01:49.280] braces. So this is not a function, but it appears that animal is still scoped to this block.
[01:49.280 --> 01:55.440] And if I console dot logged animal here, of course, it should work. And it does. We get eel,
[01:55.440 --> 02:01.840] and then animal is not defined. So that's how let behaves. And if I did change this to const
[02:01.840 --> 02:07.920] and I rerun it, we get the exact same output. We have access to animal in the curly braces inside
[02:07.920 --> 02:14.160] the conditional. We do not have access to it out here. Now if I duplicate this and I change this
[02:14.160 --> 02:21.520] to instead use far, you can probably tell where I'm going with this. If I run it, it works in both
[02:21.520 --> 02:28.240] cases. eel is printed here in the block and outside the block. So this tells us that
[02:28.320 --> 02:33.920] letting const have different scoping rules than var. Back in the day, before letting const,
[02:33.920 --> 02:40.240] we only had var and var is scoped to functions. What we covered in the last video. There is no
[02:40.240 --> 02:47.120] block scope for var. If we declare a variable using var in any block, like a conditional,
[02:47.120 --> 02:52.720] a for loop, a while loop, it is not scoped to that block. We have access to it outside.
[02:53.280 --> 02:57.840] And that could be problematic. And that is different than how a lot of programming languages behave,
[02:57.920 --> 03:02.480] which is why letting const were proposed among other reasons. So they also, you know,
[03:02.480 --> 03:07.200] there's a distinction between const and let. That was one of the reasons they were added in to
[03:07.200 --> 03:12.960] create constants in JavaScript, but also for scoping reasons. So why would this potentially be
[03:12.960 --> 03:18.720] problematic? What's wrong with having a variable declared in a block and having access to it afterwards?
[03:19.520 --> 03:24.160] There's a bunch of reasons, but let me illustrate a simple problem that you used to come up
[03:24.160 --> 03:30.960] occasionally. If we have a for loop using the var keyword, so for var i equals zero, i less than,
[03:30.960 --> 03:36.960] let's make an array called, well, we'll just do animals, let animals equal and then we'll have
[03:36.960 --> 03:47.840] grizzly bear, let's do panda bear and spectacold bear, spectacold bear. And then we'll loop over this
[03:47.840 --> 03:55.760] using a for loop, i is less than animals dot length, i plus plus, we'll console dot log animals.
[03:56.320 --> 04:03.600] And let's also console dot log i. So we get zero, oh, well, I didn't mean to console dot log
[04:03.600 --> 04:09.280] animals, let's do animals of i instead of the whole array each time we get zero grizzly bear,
[04:09.280 --> 04:16.320] one panda bear, two spectacold bear. But here's the thing, outside this loop, if I print i,
[04:17.840 --> 04:23.920] it still exists and it's actually set to three because of the way a for loop works, it starts at zero,
[04:24.480 --> 04:30.640] it that's less than animals dot length. So we loop and we add one to i and then it becomes one
[04:30.640 --> 04:38.080] and then two and the last index in here is two. So when i is two, we access the last element
[04:38.640 --> 04:44.160] and then it's incremented to three. The loop does not run again, but i doesn't cease to exist, i
[04:44.160 --> 04:49.760] is still here. We have access to it. And this could be problematic. If you were relying on a
[04:49.760 --> 04:55.840] variable called i, maybe one you had to find somewhere else like var i equals 10, you might think
[04:55.840 --> 05:03.680] that this i should remain as 10. But if we print i down here, the only i that we're getting is three
[05:03.680 --> 05:09.120] from this loop. So even though I had a different variable declared with var up top, and it looks
[05:09.120 --> 05:16.560] like at least sort of a upon first glance that i exists only in this loop because we used var,
[05:16.560 --> 05:21.520] it does not. And that means that we have access to it afterwards, which can have all sorts of
[05:21.520 --> 05:26.960] unintended consequences. It just makes it harder for you to know exactly where i stops.
[05:26.960 --> 05:32.560] It's not going to abide by these bounds if we use var because it's not block scoped.
[05:32.560 --> 05:40.560] Now if I instead come down here and do this with let, let's see what happens now.
[05:41.360 --> 05:46.720] So the loop still works great, but now when I console dot log i at the bottom, it's set to 10.
[05:47.280 --> 05:53.440] And that's because this i that we use let to declare is scoped to this block, to the for loop.
[05:53.440 --> 05:59.280] So it doesn't exist down here. The only i that exists is this one here. I used var, but we could also
[05:59.280 --> 06:06.640] use let. And it works. And if I did not have i declared up here, I try to print it out, we get an
[06:06.640 --> 06:12.160] error. There is no i. And the same holds true for const, though you wouldn't use const in a for loop
[06:12.160 --> 06:17.680] because it's being incremented that would break everything. As you can see here, it will yell at me
[06:17.680 --> 06:23.040] assignment to constant variable. The first time it tries to add one, everything breaks. So I'll undo
[06:23.040 --> 06:28.640] that change. We'll go back to let. The other thing that you can see right away, it tells you that
[06:28.640 --> 06:33.440] these are not scoped the same way that they exist in different scopes. This i here and this i
[06:33.440 --> 06:39.360] here is the fact that we don't get an error when we run this code. Normally, if we have two variables
[06:39.360 --> 06:45.760] in the same scope with a given name declared with let or const, let x equals 10. If I try and make
[06:45.760 --> 06:52.400] another x and set it equal to t, we get an error. It says identifier x has already been declared.
[06:52.400 --> 06:58.400] In this case, we're making a variable i with let. And then another i with let on the very next line,
[06:58.400 --> 07:02.880] they exist in different scopes. They are not conflicting. Once again, compared to var,
[07:03.440 --> 07:09.680] which is not block scoped, this i is the exact same i down here. So they are in the same scope.
[07:09.680 --> 07:16.000] It starts as 10 and then we are redeclaring i as zero. And you can do that with var in the same
[07:16.000 --> 07:24.880] scope. I can say var t equals one and then var t equals five, which I cannot do with let in const.
[07:24.880 --> 07:30.320] I cannot use the same identifier twice. So blocks also include things like wild loops,
[07:30.960 --> 07:37.440] conditionals, as we saw, all of those rules apply for let in const. They are scoped to the block.
[07:37.440 --> 07:43.680] So now let's just write a function that also includes a block within it called double array,
[07:43.680 --> 07:49.840] which will double an array that is passed in. So if we pass in the array of one, two, three, four,
[07:49.840 --> 07:57.200] are fine. One, three, five, we should get back two and then six and then ten. Each element is
[07:57.200 --> 08:02.960] doubled in a new array. We're not updating the original. So I'm going to write a function that
[08:02.960 --> 08:10.080] is expecting a rr some array to be passed in. We'll assume it's an array and then we'll loop over
[08:10.160 --> 08:20.640] that array using a four, let x of let's call it num num of array. I'll make a variable in here
[08:20.640 --> 08:30.400] called double, which is equal to num times two. And then up here, I'll make a variable which will
[08:30.400 --> 08:36.560] be an empty array and I will push double in for each number. So I'll start with one. I'll double
[08:36.720 --> 08:41.840] it, which I do here. I have a variable called double. I will add that into a new empty array,
[08:41.840 --> 08:46.320] which I'll call, which we call it. I'll go with const because we're not going to change the
[08:46.320 --> 08:54.400] reference. We'll call this results. It starts as an empty array and then result dot push double.
[08:57.200 --> 09:02.800] Okay, so what we have here is a function. We have const, which is scoped to the entire function,
[09:02.880 --> 09:09.760] which is why at the end, I'm able to return results because result was defined in this function,
[09:09.760 --> 09:15.040] not in a block. Then we have double, which is scoped to this block. We still have access to
[09:15.040 --> 09:20.400] result. So within a block, we still have access to variables that were declared outside the block
[09:21.040 --> 09:29.040] in this function. So let's run this now. We'll call double a rr on one, two, and three.
[09:29.680 --> 09:35.360] So one, two, three, we get two, four, and six. If I were to try and console dot log double
[09:36.880 --> 09:41.200] and run the same line, it does not work. If I instead used var for double,
[09:43.440 --> 09:49.920] it does work because var does not cease to exist after this block, meaning the last time through
[09:49.920 --> 09:55.280] the loop, which was on three, double is set to three times two, which is six. We have access to
[09:55.360 --> 10:00.720] it down here, which is why we see six. So this is just a quick example where we have different scoped
[10:00.720 --> 10:06.080] going on. We have const result, which is scoped to the entire function because it's not inside
[10:06.080 --> 10:13.520] of a block. We have go back to let, let double, which is scoped to this block from a four of loop.
[10:14.320 --> 10:18.160] So down at the bottom, we can still return results, but we don't have access to double.
[10:18.880 --> 10:24.160] If we wanted for some reason to have access to double at the end, we could define it right here,
[10:24.160 --> 10:32.560] let double, and we still have access to it here, double equals num times two. If I run this code,
[10:32.560 --> 10:37.600] we still get two, four, six. I don't know why you would want access to double outside that block.
[10:38.400 --> 10:44.640] We're only using it to push a value in inside the loop, but we do have access. If you needed it,
[10:44.640 --> 10:50.560] I can still access it even with let because I declared it in the function scope and then I'm
[10:50.560 --> 10:56.800] changing it within block scope. But I'm going to undo that and go back to what we had earlier,
[10:56.800 --> 11:03.600] where it only exists in the block. Okay, so to sum this all up, let const and var are three ways
[11:03.600 --> 11:09.200] of declaring a variable. We've seen that. There's a big difference between let and const because const
[11:09.200 --> 11:14.960] cannot be reassigned. It's a constant variable. And both let and const cannot be redeclared. So we
[11:15.040 --> 11:21.360] can't have what we've already seen. Let x equals one, let x equals two, we cannot redeclare a new
[11:21.360 --> 11:26.400] variable. We can change let at any point, but I cannot redeclare the same variable with the same
[11:26.400 --> 11:31.840] name in the same scope. Var, you can do whatever you want with it. But the very important difference
[11:31.840 --> 11:37.360] that we covered here is that on one side, we have var, which is not block scoped on the other side,
[11:37.360 --> 11:42.560] we have let and const, which are block scoped. So if you declare a variable with let or const in
[11:42.560 --> 11:48.240] a loop in a conditional in a for loop in a while loop, those variables are scoped only to the
[11:48.240 --> 11:53.040] confines of that block. If they're not in a block, if they're defined in a function, like we have
[11:53.040 --> 11:58.560] here, we can access it within that function. It doesn't exist afterwards, which is what we saw
[11:58.560 --> 12:04.160] in the last video, and the same is true for var. So var was the only option a couple of years ago,
[12:04.160 --> 12:14.160] function scoped, now let and const are here, block scoped.

// 3.
function outer() {
let movie = 'Amadeus';

function inner() {
// let movie = "The Shining";

    function extraInner() {
      //movie is not defined in this function
      //but it has access to parent function's variables
      console.log(movie.toUpperCase())
    }
    extraInner();

}
inner();
}

outer(); //'AMADEUS'

[00:00.000 --> 00:04.720] Next up, we have a different type of scope called lexical scope. This one's pretty simple and
[00:04.720 --> 00:10.960] straightforward. When we have nested functions, which we sometimes do, maybe not at this point
[00:10.960 --> 00:15.920] with what we're writing, but later on, and if you learn things like React, you'll have nested
[00:15.920 --> 00:20.400] functions all the time. If I have a nested function, like the one I have here, or the two functions,
[00:20.400 --> 00:27.200] I have outer, and inside of it I've defined another function called inner. Outer has a variable
[00:27.200 --> 00:33.840] called hero. Hero is defined in this function. I don't have access to it outside of that function,
[00:33.840 --> 00:38.880] but if I am nested further in in a different function, I still have access to hero.
[00:39.520 --> 00:43.920] So I'll demonstrate this briefly. Let's make, we'll just go with inner and outer, so function,
[00:44.880 --> 00:53.280] outer, and then we'll have function inner. And in the outer function, we'll declare a variable,
[00:53.360 --> 01:02.080] we'll call this movie equals amadeus, great film, great, great, great film. And then in inner,
[01:02.080 --> 01:09.280] let's access movie. Let's console.log, movie.to uppercase.
[01:12.480 --> 01:18.720] So at this point, how do I actually run inner? If I run outer, I'll run the code over here,
[01:18.720 --> 01:24.880] and I call outer. It doesn't return anything. All that it does is declare a variable. And then
[01:24.880 --> 01:29.360] we have a function declaration. We're writing a function, we're declaring it, but we're never calling
[01:29.360 --> 01:38.160] it. So if I execute inner from inside outer, let's try it again. Now it is successfully
[01:38.160 --> 01:44.000] console.logging, amadeus, and all caps. Movie was not defined in this function. It was defined
[01:44.000 --> 01:51.600] in its parent and the outer function right here. Secondary to this, what if I tried to call inner
[01:52.560 --> 01:58.880] from outside this function? I don't have access to it. It's just like I declared a variable
[01:58.880 --> 02:04.080] inside of outer. I declared a function. It's called inner. I don't have access to it over here.
[02:04.640 --> 02:10.800] I only have access to it inside of outer. Unless I were to return the function, which is something
[02:10.800 --> 02:17.760] we'll see later on. So if I call inner from inside outer, this is getting confusing with this,
[02:17.760 --> 02:25.280] the naming here. If I execute outer, it declares variable movie, says it's amadeus. It knows about a
[02:25.280 --> 02:31.840] function. We declare the function. We define it here, inner. And then we call it. So when it's called,
[02:31.840 --> 02:38.000] it console.logs movie, it does not have a movie defined in here. So it will look for a different
[02:38.000 --> 02:44.720] movie from the scope of the parent function, which is called outer. So lexical scope refers to the
[02:44.720 --> 02:50.960] fact that nested functions are lexically bound. They're bound to the scope of their parent or of
[02:50.960 --> 02:55.360] their outer functions. But it's a one way relationship. It doesn't work the other way around.
[02:55.360 --> 03:01.600] If I were to define a variable in here, let x equals 10. I do not have access to x outside that
[03:01.600 --> 03:08.880] function, just like regular function scope we've seen earlier on. If I run outer, we get amadeus
[03:08.880 --> 03:13.680] from the inner function running. The variable is successfully declared in inner, but I don't have
[03:13.680 --> 03:20.160] access to it out here. So a variable declared in one function is available to nested functions
[03:20.160 --> 03:25.840] within it. And then finally, if I were to declare movie in this function, a different movie,
[03:25.840 --> 03:31.040] let's say movie equals what's another good movie. How about the shining?
[03:32.240 --> 03:38.800] What do you expect to happen here when we call inner from inside outer? So when I execute outer,
[03:40.080 --> 03:45.680] it will declare movie in the scope of this function called outer. Then we execute inner and inner
[03:45.680 --> 03:51.440] defines its own version of movie called the shining. That's the value. And then we're going to print
[03:51.440 --> 03:58.560] movie dot two uppercase, which movie is printed? The shining behind the scenes, the thought process,
[03:58.560 --> 04:03.360] if you want to think of it that way, inside of this function is when we reference movie,
[04:03.360 --> 04:08.640] it's going to look to see is there a movie in this function? Is there a movie defined in this scope?
[04:08.640 --> 04:14.160] If it doesn't find it, it will look further up. Is there a movie defined up here? And if there is,
[04:14.160 --> 04:20.960] then it will use that. So we could go one level further as an example. So we'll have movie amadeus,
[04:20.960 --> 04:27.600] movie, the shining. And then in here, I'll do another inner function. I'll call this one extra
[04:27.600 --> 04:38.160] inner. And we'll console that log movie dot two uppercase in here. And I'll make sure I call
[04:38.880 --> 04:45.200] extra inner. So this is a very weird pattern what I'm doing right now, but it illustrates the
[04:45.200 --> 04:50.480] principles that play. So when I call outer, we define movie to amadeus in the scope of the outer
[04:50.480 --> 04:56.880] function, then we execute inner. In inner, we define movie right here with the value of the
[04:56.880 --> 05:03.200] shining. Then we execute extra inner extra inner does not have a movie defined inside. So it will
[05:03.200 --> 05:10.400] look up to the nearest scope, which is the inner function and use that value. So if I run outer,
[05:12.160 --> 05:18.320] we get the shining. If I were to comment this out, we don't get an error, it just continues up,
[05:18.320 --> 05:22.480] past inner, it doesn't find movie. So it looks up again. Does it find movie there?
[05:24.080 --> 05:29.360] And it does. And that's pretty much it. When you have a nested function, you have access to the
[05:29.360 --> 05:34.320] variables declared in the scope of the parent function. And that continues down as many levels as
[05:34.320 --> 05:39.440] you need to nest. This seems like it might be useless or not that useful. But as I mentioned,
[05:39.440 --> 05:45.440] if you use things like react later on, you define function so that represent a component on your page.
[05:45.440 --> 05:51.600] So you could have a function called to do list. And in that to do list component, you might have
[05:51.600 --> 06:01.200] different variables like let to do equals an array and let username equals something. Then you
[06:01.200 --> 06:06.560] would have different functions for that to do list. You might have one called add to do.
[06:08.080 --> 06:13.680] If I can spell to do, you might have another one called remove to do and another one called update
[06:14.400 --> 06:20.000] to do. And they might use to do this and username in their function bodies. So we're grouping it all
[06:20.000 --> 06:26.240] together into a to do list function, because that's what react wants. But we still break up our code,
[06:26.240 --> 06:32.240] our functionality into smaller pieces. And we have access to those variables declared in the outer
[06:32.240 --> 06:42.800] function. Okay, so that's lexical scope.

Do exactly the same below using the below code and the transcript of the video organize and write it in a very simple way for beginners in .md format for github
Use the transcript but don't put timestamps or reference to it's reference being used

Define the below for each one and use the examples for each the represents each scope from below. Don't forget to mention the scope name and also if it has another name like global/local. use the transcript while proccessing but don't use any reference to it it like mentioning you took it from a transcript but use the transcript for infromation and so in the out put make each seperately in sections and use the provided links as well for full infromation incorprate where necessary and exclude if it's repetitive. It's Very very important to use a simple language when explaining but it has to be very clear for beginners. Use the link below to incorporate code, examples and any information and code that's benefetial and not repetitive

https://hackyourfuture.github.io/study/#/javascript/modern-js
Modern JavaScript
You are undoubtedly different than when you were a baby. Back then you couldn't do much except crying. That's pretty much it. But as the years pass you increasingly could do more and more: walking, socializing or playing an instrument.

Likewise, so has JavaScript evolved. Throughout learning programming you probably have, unknowingly, used syntax from different JavaScript versions. For example, if you've ever declared a function like this:

function aFunction() {
// Some magnificent code ...
}
You did so using an old version of JavaScript.

But if you've ever used Arrow Functions (which you'll learn more about in the next section), you did so using a newer version of JavaScript.

Each feature (and its updates) of a language is made to solve a specific problem. It's important to know the context and purpose of each to know how to use it.

Always be mindful of which version of any technology, library or language you are using. This is important, because this means that not everything will work the same way, even if it's the same tool you've been using! In your coding journey you'll come across many code bases that will include different versions of technologies.

So let's talk about all the things Modern JavaScript has given us:

Let/const
Template strings
Arrow Functions
Spread operator
Default parameter
Destructuring
Let / const
One of the first things that were introduced in modern JS were the let and const keywords to replace var. You can read all about them in our variables explanation.

Template strings
Template strings are easiest to explain with an example. Have a look at the following:

const name = 'Ayman';

// ES5 string concatenation
console.log('Hello ' + name + ', welcome aboard');

// ES6 template strings
console.log(`Hello ${name}, welcome aboard`);
Note the use of the backtick (`) instead of the normal quote, that tells the compiler that we want to use a template string. What is even cooler is that inside the ${} syntax you can even add some expressions. If we combine it with the ternary operator for example:

const name = 'Rana';
const grade = 8;

console.log(
`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} your test`
);
Arrow Functions
One of a programmer's favorite things to do is to write clean and concise code. Arrow Functions are a new way to write functions, given to us by the ECMAScript 6 (The software standard JavaScript is based upon) update of JavaScript.

It's a little different from regular functions, take a look:

// ES5 Function
function addNum(num1, num2) {
return num1 + num2;
}

// Arrow Function (stored in variable)
const addNum = (num1, num2) => {
return num1 + num2;
};
If you've done some research, you may come to the following conclusions:

First of all, the Arrow Function is anonymous by design. If we want to refer to it, we should store it into a variable.
Secondly, the way Arrow Functions can be written can differ (while still working the same way). Sometimes you don't need the () if there's a single parameter. Sometimes you can return a value without use for the return keyword.
Extra reading on arrow functions
JavaScript ES6 Arrow Functions
Let's learn ES6 - Arrow Functions
When (and why) you should use ES6 arrow functions — and when you shouldn’t
this: tyler mcginnis
youtube search
dario garcia moya
Spread operator
The spread operator again allows us to write cleaner code as well as introduces some new options. The basic idea is that it allows us to expand an iterable such as an array or string in place using just .... Let's see it in action:

const numbers = [1, 2, 3];
const string = ['fruit', 'vegetable'];

const combined = [...numbers, ...string];
console.log(combined); // Will be [1, 2, 3, 'fruit', 'vegetable']
This means you don't have to create a whole loop over the different arrays to create a new one, you can just use the spread operator. But it gets even better, you can also do it when looking at arguments to a function, as follows:

const sendCongratulationsMessage = (name) => {
console.log(`Congratulations ${name}, you passed the test.  Well done!`);
};

const sendConsolidationMessage = (name) => {
console.log(
`Sorry ${name}, unfortunately you did not pass your test. Let's see what we can do to get you back on track`
);
};

const sendResultMessage = (grade, ...rest) => {
if (grade < 6) {
sendConsolidationMessage(...rest);
} else {
sendCongratulationsMessage(...rest);
}
};

sendResultMessage(5, 'John');
sendResultMessage(9, 'Deedee');
This way we nicely got the logic of what is a passing grade into one function and could send the rest of the arguments through to the message functions.

An example where this happens a lot is in React, where you can create a hierarchy of components and then take away only the props you care about and send the rest through without defining anything about them.

Default Parameter Values
In modern javascript it is also possible to set some default values for functions. Again it is easiest to just look at an example:

const greeting = (name, greeting = 'Hello') => {
console.log(`${greeting} ${name}, welcome aboard!`);
};

greeting('Burak');
greeting('Veronika', 'Привет');
This is a nice and simple way to set some default values without needing to add if statements. Beautiful!

Destructuring
The destructuring syntax is great to grab values from objects and/or arrays in a simple way. Let's look at the same resulting code but then in the ES5 and ES6 syntax:

const studentResult = {
name: 'Mahmood',
subject: 'React',
grade: 9,
};

const showResult = (name, subject, grade) => {
console.log(
`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`
);
};

// ES5 | We add the ES5 on the variables to keep the code runnable, do not use bad names like that!
const nameES5 = studentResult.name;
const subjectES5 = studentResult.subject;
const gradeES5 = studentResult.grade;

showResult(nameES5, subjectES5, gradeES5);

// ES6
const { name, subject, grade } = studentResult;

showResult(name, subject, grade);

// ES6 | You can even rename the property as follows. Again don't use bad variable names like this
const { name: nameES6, subject: subjectES6, grade: gradeES6 } = studentResult;

showResult(nameES6, subjectES6, gradeES6);
That is how you destructure an object. You can do a similar thing with arrays, following is the same example but then with our data in an array:

const studentResult = ['Mahmood', 'React', 9];

const showResult = (name, subject, grade) => {
console.log(
`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`
);
};

// ES5 | We add the ES5 on the variables to keep the code runnable, do not use bad names like that!
const nameES5 = studentResult[0];
const subjectES5 = studentResult[1];
const gradeES5 = studentResult[2];

showResult(nameES5, subjectES5, gradeES5);

// ES6 | With a bonus default value!
const [name, subject = 'JavaScript', grade] = studentResult;

showResult(name, subject, grade);
Note that we can even have default values while destructuring an array like we did with the subject in the example above!

//Let/const
Make your own example codes

//Template strings
Make your own example codes

//Arrow Functions
Arrow Functions Intro
//Non-arrow function expression:
// const square = function (x) {
// return x \* x;
// }

// Equivalent arrow function:
const square = (x) => {
return x \* x;
}

//parens are option when you have 1 parameter
const isEven = num => {
return num % 2 === 0;
}

//Must include parens for multiple parameters
const multiply = (x, y) => {
return x \* y;
}

// Must include parens for zero parameters
const greet = () => {
console.log("HI!")
}
Arrow Functions Implicit Returns
// "Regular" arrow function:
const square = n => {
return n _ n;
}
// Implicit Return, on multiple lines using parens
const square1 = n => (
n _ n
)

// Implicit return one-liner:
const square2 = n => n \* n;

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
const doubles1 = nums.map(function (n) {
return n \* 2;
})

const doubles2 = nums.map(n => {
return n \* 2;
})

const doubles3 = nums.map(n => n \* 2);

const parityList = nums.map(function (n) {
if (n % 2 === 0) return 'even';
return 'odd';
})

const parityList1 = nums.map((n) => {
if (n % 2 === 0) return 'even';
return 'odd';
});
const parityList2 = nums.map((n) => (
n % 2 === 0 ? 'even' : 'odd'
));

const parityList3 = nums.map((n) => n % 2 === 0 ? 'even' : 'odd');

//Note to manus ai//
use the below for rest param examples
// OLD WAY!
// function sum() {
// const argsArr = [...arguments]
// return argsArr.reduce((total, currVal) => {
// return total + currVal
// })
// }

// New way using rest:
function sum(...nums) {
return nums.reduce((total, currVal) => {
return total + currVal
})
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
console.log('first', first)
console.log('last', last)
console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
nums.reduce((total, currVal) => total \* currVal)
)

//Note to manus ai//
Default Parameters
// The old way of adding a default value:
// function multiply(x, y) {
// if (typeof y === 'undefined') {
// y = 1;
// }
// return x \* y;
// }

// A slightly shorter version:
// function multiply(x, y) {
// y = typeof y === 'undefined' ? 1 : y
// return x \* y;
// }

// The new super clean way of adding defaults!
function multiply(x, y = 1) {
return x \* y;
}
multiply(3, 4); //12
multiply(3); //3

// Another example!
// const greet = (person, greeting = 'hi') => {
// console.log(`${greeting}, ${person}!`)
// }

// Default value of an array:
// const blah = (x, y = [1, 2, 3]) => {
// console.log(x, y);
// }

// Multiple default values are possible, but rare
// const greet = (person, greeting = 'hi', punctuation = '!') => {
// console.log(`${greeting}, ${person} ${punctuation}`)
// }

//Note to manus ai//
Destructuring Arrays
const raceResults = [
'Eliud Kipchoge',
'Feyisa Lelisa',
'Galen Rupp',
'Ghirmay Ghebreslassie',
'Alphonce Simbu',
'Jared Ward'
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
Destructuring Objects
const runner = {
first: "Eliud",
last: "Kipchoge",
country: "Kenya",
title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {
// first,
// last,
// time
// } = runner;

const {
country: nation,
title: honorific
} = runner;

const {
first,
last,
...other
} = runner;
Nested Destructuring
const results = [{
first: "Eliud",
last: "Kipchoge",
country: "Kenya",
},
{
first: 'Feyisa',
last: 'Lilesa',
country: 'Ethiopia'
},
{
first: 'Galen',
last: 'Rupp',
country: 'United States'
}
]
// NESTED DESTRUCTURING
const [{
first: goldWinner
}, {
country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"

const [{ first: goldWinner, last, country: countries }] = results
const [{first: goldWinner}, {last}, {country: countries}] = results

Destructuring Parameters
const runner = {
first: "Eliud",
last: "Kipchoge",
country: "Kenya",
title: "Elder of the Order of the Golden Heart of Kenya"
}

// Rather than destructuring INSIDE the function body
// function print(person) {
// const {
// first,
// last,
// title
// } = person;
// console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({
first,
last,
title
}) {
console.log(`${first} ${last}, ${title}`)
}

const response = [
'HTTP/1.1',
'200 OK',
'application/json',
]

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
console.log(`Status: ${statusCode}`)
}

//Note to manus ai//
Rest Param
// OLD WAY!
// function sum() {
// const argsArr = [...arguments]
// return argsArr.reduce((total, currVal) => {
// return total + currVal
// })
// }

// New way using rest:
function sum(...nums) {
return nums.reduce((total, currVal) => {
return total + currVal
})
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
console.log('first', first)
console.log('last', last)
console.log('titles', titles)
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => (
nums.reduce((total, currVal) => total \* currVal)
)

//Note for manus ai//
Please come up with your own example explanation code and information to explain for those modern java script feature I included but didn't provide code for ex. Let/const and
Template strings
