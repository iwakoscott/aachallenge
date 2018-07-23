<html>
  <head>
  <!-- Nothing to see here btw, but if you are interested: -->
  <!--
    Our backend autogenerates
    this from the README.md file
    of the repo powering this.
  -->
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
  <link rel="stylesheet" href="//cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
  <link rel="stylesheet" href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
  </head>
  <body>
    <section style="padding: 40px 50px; max-width: 960px; margin: 0 auto;">
      <h1 id="aachallenge1"><strong>a/A</strong> Challenge 1</h1>
<p><em>It's great to have you here!</em> At AppAcademy we look to find and make brilliant engineers and we think you could do well as an engineer at a/A so we decided to extend a fun challenge over to see how you tackle it.</p>
<p>Grab a cup of your favorite beverage, create a GitHub repo and take your time towards this challenge. Let us know once you have completed the challenge by emailing the repo url to App Academy Devs <a href="m&#97;&#x69;&#108;&#116;&#x6f;&#x3a;&#100;&#x65;&#118;&#x40;&#97;&#112;&#x70;&#97;&#99;&#97;&#x64;&#101;m&#x79;&#46;&#x69;&#111;">d&#101;&#118;&#x40;&#x61;&#112;&#112;&#97;&#99;a&#100;&#x65;&#x6d;&#x79;&#46;&#x69;&#111;</a>.</p>
<hr />
<h4 id="beforewegetstartedhereisaquickbriefofhowweassesstherepo">Before we get started here is a quick brief of how we assess the repo:</h4>
<h3 id="whatwelookfor">What we look for:</h3>
<ul>
<li>Well written code and good structure</li>
<li>Easy to read and well documented code</li>
<li>Steps to reproduce and run your code</li>
<li>Well implemented and nice looking UIs</li>
<li>Proper use of Git (your commit history is important)</li>
<li>Maybe test cases</li>
</ul>
<h3 id="whatwedontlookfor">What we <strong>don't</strong> look for:</h3>
<ul>
<li>Frameworks, Languages, etc. (choose what you are comfortable with but keep it lean)</li>
<li>A fully working solution (there is little time and too many potential bugs, finishing the challenge isn't the most important aspect)</li>
</ul>
<hr />
<h1 id="thechallenge">The Challenge</h1>
<p>Real-time collaboration applications are always fun and intuitive, we want to put together a document editing application on the web, in the first version we only need the bare minimum (MVP) to see and edit documents of either text or markdown.</p>
<p>One of our engineers has put together <strong>a backend to support such a system that is readily available to you</strong> with a few limitations which may need to be patched in your code, <strong>you will be taking the role of implementing the Frontend of this product.</strong></p>
<p>Our product owner has written the following specs:</p>
<h2 id="requirementsforv1">Requirements (for V1)</h2>
<ol>
<li>Collect a username from the User when they first land on the site and store it on their browser.</li>
<li>Get the list of all documents in the database from the backend and show it to all users.</li>
<li>Allow a user to create their own document.</li>
<li>Allow a user to edit a document.</li>
</ol>
<h2 id="nicetohaves">Nice to haves</h2>
<h4 id="noneorasmanyasyouhavetimeforinnospecialorder">(none or as many as you have time for, in no special order)</h4>
<ul>
<li>Format documents with Markdown.</li>
<li>Connect the application to the real-time backend (websocket) to know when changes are made and documents are created. Have a nice UI to show these.</li>
<li>Use the <code>patch</code> system from the real-time backend to make our application faster and allow real-time collaboration. (See Websocket section below for details)</li>
<li>Make the UI really nice</li>
<li>Test your MVP implementation really well</li>
</ul>
<hr />
<h1 id="thebackend">The Backend</h1>
<h2 id="apirestfuljson">API (RESTful, JSON)</h2>
<p>Our backend engineer was too lazy to implement a proper Restful endpoint (perhaps he was resting) so this is what was put together at <a href="https://aachallengeone.now.sh">https://aachallengeone.now.sh</a>:</p>
<p><strong>GET</strong> /read - Get all available documents in the following format:</p>
<p><strong>Response</strong>:</p>
<pre><code class="js language-js">{
  &lt;name&gt;: {
      "owners": [&lt;user&gt;, &lt;user&gt;, ...],
      "lastChangeBy": &lt;user&gt;,
      "content": &lt;content&gt;
  },
  &lt;name&gt;: {
      "owners": [&lt;user&gt;, &lt;user&gt;, ...],
      "lastChangeBy": &lt;user&gt;,
      "content": &lt;content&gt;
  },
  ...
}
</code></pre>
<hr />
<p><strong>GET</strong> /read/:document - Get a specific document:</p>
<p><strong>Response</strong>:</p>
<pre><code class="js language-js">{
  "owners": [&lt;user&gt;, &lt;user&gt;, ...],
  "lastChangeBy": &lt;user&gt;,
  "content": &lt;content&gt;
}
</code></pre>
<hr />
<p><strong>POST</strong> /update/:document - Update/Create a given document, only supports the two following parameters:</p>
<p><strong>Body</strong>:</p>
<pre><code class="js language-js">{
  "issuer": &lt;user&gt;,
  "content": &lt;content&gt;
}
</code></pre>
<p><strong>Response</strong>:</p>
<pre><code class="js language-js">{
  "success": true
}
</code></pre>
<p><strong>GET</strong> /ping - Returns Pong
<strong>Response</strong>:</p>
<pre><code>pong
</code></pre>
<hr />
<p>Our Backend developer graciously provided this Postman file with examples for you to try out, although it isn't necessary it may help if you are stuck dealing with the API:</p>
<p><a href="https://app.getpostman.com/run-collection/d2012928ca2d7da3710c"><img src="https://run.pstmn.io/button.svg" alt="Run in Postman" /></a></p>
<hr />
<h2 id="websocketpurewebsocketnotbasedonsocketio">Websocket (Pure Websocket, not based on Socket.io)</h2>
<p>Our Websocket implementation is fairly barebones, once you connect to the Websocket endpoint at <code>wss://aachallengeone.now.sh</code> all events that happen regarding <code>creation</code> and <code>update</code> of documents will be broadcasted to all the members connected to the Websocket.</p>
<p>Each event is emitted with a stringified JSON object, there are 3 types of events as represented below with their Schema:</p>
<p><strong>new</strong> - Emitted when a new document is created</p>
<pre><code class="js language-js">{
  type: 'new',
  file: &lt;document_name&gt;,
  issuer: &lt;user&gt;,
  document: {
    "owners": [&lt;user&gt;, &lt;user&gt;, ...],
    "lastChangeBy": &lt;user&gt;,
    "content": &lt;content&gt;
  }
}
</code></pre>
<hr />
<p><strong>join</strong> - Emitted when a new user starts editing a document</p>
<pre><code class="js language-js">{
  type: 'join',
  file: &lt;document_name&gt;,
  issuer: &lt;user&gt;
}
</code></pre>
<hr />
<p><strong>patch</strong> - A complex Patch (based on a diff done on the backend) to apply to your document to allow real-time changes:</p>
<pre><code class="js language-js">{
  type: 'patch',
  file: &lt;document_name&gt;,
  issuer: &lt;user&gt;,
  patch: &lt;patch_object&gt; // See below
}
</code></pre>
<hr />
<h3 id="realtimepatches">Real-time Patches</h3>
<p>If you have the time and the patience to go the extra mile and finish your application, the real-time patch that we provide is the way to go. Be warned this part is quite difficult to debug <strong>and although the implementation is correct it will likely cause bugs due to naive setup</strong> so branch out before you commit and push any code.</p>
<p>Our backend engineer sat down and evaluated to find the perfect patching solution for real-time updates (we often pair/whiteboard for this). His solution involves a diff based library known as JSDiff <a href="https://github.com/kpdecker/jsdiff">https://github.com/kpdecker/jsdiff</a>, this library works on both backend and frontend.</p>
<p>On the backend a patch is generated whenever someone hits the <code>/update</code> endpoint by calling the <code>JSDiff#createPatch</code> method with the current document and the now updated document as provided by the issuer of the update.</p>
<p>Although we recommend using the same library to apply the patch you are free to come up with any solution.</p>
<hr />
<h1 id="alldoneorsomewhatdone">All Done? Or somewhat done?</h1>
<p>Send it over (a link to the GitHub repo to <a href="mailto:dev@appacademy.io">dev@appacademy.io</a>), regardless of completion we would love to take a look at how you have approached the challenge and find your strengths.</p>
<hr />
<h3 id="foundbugsinourbackend">Found bugs in our backend?</h3>
<p>The backend is backed by test cases but if you've found bugs in this challenge or something that you think should be fixed send it over.</p>
    </section>
  <body>
</html>