<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About</h1>

  This is course work for <a href=https://benschmidt.org/bigdata21>the fall 2021 offering of the History of Big Data</a>
  at NYU. I'm incredibly grateful to a large number of archivists, librarians, historians, and others who provided
	suggestions on Twitter: you can read a number of those below the form below.

	This course be offered again--if you wish to suggest another dataset for students to write about, please suggest it here.
	
	<p></p>

	<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfsSireahCg6t5csIuXTFE5UJTwg3E08aqjCHudHbGopCw6Zg/viewform?embedded=true" width="640" height="1519" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


  <h2>Suggestions</h2>

I asked online for some leads on digitized archives. Here are possibilities to check out, or which might
serve as inspiration for more places to look. My thanks to everyone who suggested something here!

<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">How about 166 years of listing Jesuits all over the world? (mix of MS &amp; print) <a href="https://t.co/quuqvEd0xp">https://t.co/quuqvEd0xp</a></p>&mdash; Ryan Baumann (\@ryanfb) <a href="https://twitter.com/ryanfb/status/1443574293313384462?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="fr" dir="ltr">Check out the Comédie-Française Registers Project for nightly performance receipts: <a href="https://t.co/n58hVMAre4">https://t.co/n58hVMAre4</a></p>&mdash; Derek Miller (@DerekKMiller) <a href="https://twitter.com/DerekKMiller/status/1443576182025248775?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">The Rare Books department at <a href="https://twitter.com/BPLBoston?ref_src=twsrc%5Etfw">\@BPLBoston</a> has just digitized its catalog card collection— some of which are still the only records for these special collections holdings. There’s tons of useful work to be done parsing these imaged cards! <a href="https://t.co/Iv25qMV3oE">https://t.co/Iv25qMV3oE</a> cc <a href="https://twitter.com/Jay_Moschella?ref_src=twsrc%5Etfw">\@Jay_Moschella</a></p>&mdash; Garrett Dash Nelson (\@en_dash) <a href="https://twitter.com/en_dash/status/1443586126074171394?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">One from my own diss research: Colonial Office correspondence registers. Australia has microfilmed and digitized the parts relevant to Australiasia &lt;<a href="https://t.co/fC5c2ecbvD">https://t.co/fC5c2ecbvD</a>&gt;.</p>&mdash; Thanasis Kinias, Ph.D. (\@tkinias) <a href="https://twitter.com/tkinias/status/1443572731421757450?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">The registers are in different series than the original correspondence, e.g. CO 424 is the register for colonial Queensland &lt;<a href="https://t.co/IJBpQBiIjX">https://t.co/IJBpQBiIjX</a>&gt;. The early volumes are a bit sparse, but by the late 19C these are very rich in metadata about the correspondence.</p>&mdash; Thanasis Kinias, Ph.D. (\@tkinias) <a href="https://twitter.com/tkinias/status/1443573252895297547?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">See the Mountain States Weather Services Monthly Climatological Data: <a href="https://t.co/9jIlhWgfms">https://t.co/9jIlhWgfms</a><a href="https://twitter.com/hashtag/climatology?src=hash&amp;ref_src=twsrc%5Etfw">#climatology</a> <a href="https://twitter.com/hashtag/Colorado?src=hash&amp;ref_src=twsrc%5Etfw">#Colorado</a> <a href="https://twitter.com/hashtag/archives?src=hash&amp;ref_src=twsrc%5Etfw">#archives</a> <a href="https://twitter.com/hashtag/weather?src=hash&amp;ref_src=twsrc%5Etfw">#weather</a> <a href="https://t.co/kwiMiIEUm4">pic.twitter.com/kwiMiIEUm4</a></p>&mdash; Mark Shelstad (\@markshelstad) <a href="https://twitter.com/markshelstad/status/1443605785204838411?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">I&#39;d take a look at <a href="https://twitter.com/bl_eap?ref_src=twsrc%5Etfw">\@BL_EAP</a> for some really varied collections, and <a href="https://twitter.com/_FromThePage_?ref_src=twsrc%5Etfw">\@_FromThePage_</a> have been doing work with structured table / spreadsheet transcription so might have some good examples to hand</p>&mdash; Dr Mia Ridge (\@mia_out) <a href="https://twitter.com/mia_out/status/1443582205385531392?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

(Note--this is an extensive list of multiple archives, worth reading through if you're not sure what you're looking for.)

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">My list here includes quite a lot of non-printed sources, if any of them are interested in early modern: <a href="https://t.co/Pukb8XpAWi">https://t.co/Pukb8XpAWi</a></p>&mdash; Sharon Howard (\@sharon_howard) <a href="https://twitter.com/sharon_howard/status/1443568841485783048?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">We digitized the Boston Phoenix&#39;s indexes: <a href="https://t.co/eCEQyin1ti">https://t.co/eCEQyin1ti</a><a href="https://t.co/lRcl76z9pg">https://t.co/lRcl76z9pg</a></p>&mdash; Giordana Mecagni (\@gmecagni) <a href="https://twitter.com/gmecagni/status/1443610818604453901?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">Back to Mia&#39;s suggestion, spreadsheet projects we host include these:<br>Arnold Arboretum collection notes:<a href="https://t.co/tKhSJ80sFP">https://t.co/tKhSJ80sFP</a><a href="https://t.co/ZyIPkjJqil">https://t.co/ZyIPkjJqil</a><br>Lone Rock Stockade convict leasing records:<a href="https://t.co/TrGW7ScGtq">https://t.co/TrGW7ScGtq</a><br>Queensland female prison records:<a href="https://t.co/wXl4PO6jeb">https://t.co/wXl4PO6jeb</a></p>&mdash; Ben W. Brumfield (\@benwbrum) <a href="https://twitter.com/benwbrum/status/1443594575801618443?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">Hospital records from the American Civil War might make for some good (and gruesome) sources. There are some digitized CW hospital case books at UA Birmingham&#39;s library, the &quot;BW Allen Reports&quot; <a href="https://t.co/dzPs25dCsN">https://t.co/dzPs25dCsN</a></p>&mdash; Jonathan S. Jones (\@_jonathansjones) <a href="https://twitter.com/_jonathansjones/status/1443615595019358211?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">Of potential interest/relevance <a href="https://t.co/jHUNwlDWH8">https://t.co/jHUNwlDWH8</a> and <a href="https://t.co/4gAPcVEITV">https://t.co/4gAPcVEITV</a></p>&mdash; Trevor Owens 💾🗄🕚 (\@tjowens) <a href="https://twitter.com/tjowens/status/1443614443192164355?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">Also, many of the individual documents in this collection could be relevant <a href="https://t.co/aGkKiCuohS">https://t.co/aGkKiCuohS</a></p>&mdash; Trevor Owens 💾🗄🕚 (\@tjowens) <a href="https://twitter.com/tjowens/status/1443616099023695881?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">the w.e.b. dubois archives:<a href="https://t.co/aEk1ir264c">https://t.co/aEk1ir264c</a><br><br>has plenty of variety (as suggested by the series titles), e.g.<a href="https://t.co/iXckVJ9UBO">https://t.co/iXckVJ9UBO</a><a href="https://t.co/SoiGcr95p0">https://t.co/SoiGcr95p0</a></p>&mdash; brendan o&#39;connor (\@brendan642) <a href="https://twitter.com/brendan642/status/1443614233233551363?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">UH special collections has some v interesting digitized Houston history archives; <a href="https://twitter.com/JulieGrob?ref_src=twsrc%5Etfw">\@JulieGrob</a> wd prob have lots of ideas <a href="https://t.co/f2WM6MlVeT">https://t.co/f2WM6MlVeT</a></p>&mdash; Dave Mazella (\@DaveMazella) <a href="https://twitter.com/DaveMazella/status/1443620395492515846?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote data-conversation="none"  class="twitter-tweet"><p lang="en" dir="ltr">Hi! 👋 What a fun assignment! The first thing that came to mind is early ecologist Ed Ricketts’ survey cards. He was a meticulous record keeper for observations of marine species. <a href="https://t.co/geAK7fXPCs">https://t.co/geAK7fXPCs</a></p>&mdash; Dr. Amanda Whitmire 🧜🏼‍♀️ (\@AWhitTwit) <a href="https://twitter.com/AWhitTwit/status/1443573216065118210?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">More generally, any herbarium collection should qualify. Browse <a href="https://t.co/kXyu4EV9VK">https://t.co/kXyu4EV9VK</a>. <a href="https://twitter.com/BioDivLibrary?ref_src=twsrc%5Etfw">\@BioDivLibrary</a> is also a perfect resource for this assignment if you are interested in science collections.</p>&mdash; Dr. Amanda Whitmire 🧜🏼‍♀️ (\@AWhitTwit) <a href="https://twitter.com/AWhitTwit/status/1443574705529577481?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">More generally, any herbarium collection should qualify. Browse <a href="https://t.co/kXyu4EV9VK">https://t.co/kXyu4EV9VK</a>. <a href="https://twitter.com/BioDivLibrary?ref_src=twsrc%5Etfw">\@BioDivLibrary</a> is also a perfect resource for this assignment if you are interested in science collections.</p>&mdash; Dr. Amanda Whitmire 🧜🏼‍♀️ (\@AWhitTwit) <a href="https://twitter.com/AWhitTwit/status/1443574705529577481?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">University library records?<br><br>I have a project on Glasgow up here, which includes page images: <a href="https://t.co/p8Idoi9Vgc">https://t.co/p8Idoi9Vgc</a>.<br><br>St Andrews have a number of borrowing registers and catalogues online here: <a href="https://t.co/vkFaOAK7NH">https://t.co/vkFaOAK7NH</a>.</p>&mdash; Matthew Sangster (\@MJRSangster) <a href="https://twitter.com/MJRSangster/status/1443621806913605633?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


A note on this one--it lists a bunch of libraries that have created high-quality digital images in a format called IIIF we'll be exploring later. So these might be places to click a link and then put "register", "ledger", "cards", etc. into a search box.

<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">Awesome assignment and happy that <a href="https://twitter.com/hashtag/IIIF?src=hash&amp;ref_src=twsrc%5Etfw">#IIIF</a> is useful -- this a nascent effort that we&#39;ll be expanding on in coming months, and perhaps it might be useful to you/your students: <a href="https://t.co/ugqDoF3WOT">https://t.co/ugqDoF3WOT</a> (many more major collections to be added there, but it&#39;s a start)</p>&mdash; Josh Hadro (\@Hadro) <a href="https://twitter.com/Hadro/status/1443620193377398789?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote  data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve just finished giving a session on the &quot;Transcribing the Book of Remembrance&quot; project which is 20C but fits the bill of a different kind of database in <a href="https://twitter.com/hashtag/iiif?src=hash&amp;ref_src=twsrc%5Etfw">#iiif</a>: <a href="https://t.co/7HUK2Fp7UX">https://t.co/7HUK2Fp7UX</a></p>&mdash; Glen Robson (\@glenrobson) <a href="https://twitter.com/glenrobson/status/1443628036373499909?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote data-conversation="none" class="twitter-tweet"><p lang="en" dir="ltr">I agree a local gazetteer is a good place to start, and lots of freely accessible digitized copies here: <a href="https://t.co/qnXTOAODxE">https://t.co/qnXTOAODxE</a></p>&mdash; Hilde De Weerdt (@hild_de) <a href="https://twitter.com/hild_de/status/1443641053739954176?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">British military lists? <a href="https://t.co/dc64LZuGJP">https://t.co/dc64LZuGJP</a> Or pre-computer library catalogues? <a href="https://t.co/28s26ekAtd">https://t.co/28s26ekAtd</a></p>&mdash; Helen Vincent (@helenrvincent) <a href="https://twitter.com/helenrvincent/status/1443656470843863043?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">franklin&#39;s post office books digitized by aps: <a href="https://t.co/1rt8IIWlL4">https://t.co/1rt8IIWlL4</a>. <a href="https://t.co/9uo2RW0v50">https://t.co/9uo2RW0v50</a></p>&mdash; susan garfinkel (@footnotesrising) <a href="https://twitter.com/footnotesrising/status/1443706477869473800?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">If you&#39;re happy for your students to &quot;travel&quot; abroad, there&#39;s the <a href="https://twitter.com/LSELibrary?ref_src=twsrc%5Etfw">@LSELibrary</a> Charles Booth data archive: <a href="https://t.co/OEK7OPJZzM">https://t.co/OEK7OPJZzM</a><br><br>And the court proceedings of <a href="https://twitter.com/OldBaileyOnline?ref_src=twsrc%5Etfw">@OldBaileyOnline</a> London&#39;s central criminal court 1674-1913: The Old Bailey Online: <a href="https://t.co/OMohGYhRpx">https://t.co/OMohGYhRpx</a>.</p>&mdash; Prof Laura Vaughan (@urban_formation) <a href="https://twitter.com/urban_formation/status/1443906176203300872?ref_src=twsrc%5Etfw">October 1, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Also, there are these handwritten logs from a commercial photographer here: <a href="https://t.co/GDeQK0dYbG">https://t.co/GDeQK0dYbG</a> and we have transcribed about 1/2 of them.</p>&mdash; Giordana Mecagni (@gmecagni) <a href="https://twitter.com/gmecagni/status/1443613172598931462?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">thomas nevil day book at <a href="https://t.co/CY3Y2Yy980">https://t.co/CY3Y2Yy980</a> and one relevant article: <a href="https://t.co/Yo2lUQou7O">https://t.co/Yo2lUQou7O</a></p>&mdash; susan garfinkel (@footnotesrising) <a href="https://twitter.com/footnotesrising/status/1443711649953861634?ref_src=twsrc%5Etfw">September 30, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Thanks for the shout-out! Franklin&#39;s shop ledgers, an 18c. indenture records book, and more are also digitized/datafied and accessible at <a href="https://t.co/YwY1r1qrwp">https://t.co/YwY1r1qrwp</a></p>&mdash; 🧟 link rot + inherent vice 💀 (@comebackcities) <a href="https://twitter.com/comebackcities/status/1443983418111533070?ref_src=twsrc%5Etfw">October 1, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">YMCA WW1 service punch cards from <a href="https://twitter.com/yarchives?ref_src=twsrc%5Etfw">@yarchives</a> at the <a href="https://twitter.com/umnlib?ref_src=twsrc%5Etfw">@umnlib</a> <a href="https://t.co/NPDpzI6ptN">https://t.co/NPDpzI6ptN</a></p>&mdash; Lara F-S (@ldfs) <a href="https://twitter.com/ldfs/status/1444147732361498624?ref_src=twsrc%5Etfw">October 2, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>