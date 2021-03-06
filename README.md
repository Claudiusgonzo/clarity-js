# Clarity
Clarity is a client-side JavaScript library that helps you understand how users view and use your webpage across all modern devices and browsers. 
Understanding how users navigate, interact and browse your website can provide new insights about your users.  Empathizing with your users and seeing where features fail or succeed can help improve your product/site, grow revenue and user retention.

Clarity provides you all these insights by:
* Observing content layout, viewport, and user's interactions with the page
* Inspecting network requests on the page
* Logging the information by sending JSON objects to a specified endpoint

Clarity is a project in active development. While it's not yet ready for production use, we continue making improvements and encourage the community to join us in the process!

Here are some example sessions on popular websites visualized to demonstrate the telemetry captured:
1. CNN (Web)
</br><a href="https://thumbs.gfycat.com/AggressiveLankyAbyssiniangroundhornbill-size_restricted.gif"><img src="https://thumbs.gfycat.com/AggressiveLankyAbyssiniangroundhornbill-size_restricted.gif" title="Clarity JS CNN Example"/></a>

2. Cook with Manali (Mobile)
</br><a href="https://thumbs.gfycat.com/CoolDependableAdamsstaghornedbeetle-size_restricted.gif"><img src="https://thumbs.gfycat.com/CoolDependableAdamsstaghornedbeetle-size_restricted.gif" title="Clarity JS Cook With Manali Example"/></a> 

## Project Goals
* Enable a generic solution that is able to capture telemetry from third-party web-sites
* Encourage participation from open-source community
* Minimal configuration required by third party web-sites to get started
* Mobile first

## Privacy Notice
Clarity handles sensitive data with care. By default content on the page is masked before upload, so no actual text from the page is sent to the server.
All data collection is performed solely with the purpose of providing better insights into customers' pages interactions and improving their users' experiences.

If there are specific regions of the page which a webmaster is completely confident will have no personal data and there is value in sending the regular text nodes,
DOM nodes can be marked with the "data-clarity-unmask" attribute. This will cause the given node and all children to return unmasked text. Masking can be turned back 
on for arbitrary child DOM nodes by adding the "data-clarity-mask" attribute.

## Improving Clarity
If you haven't already done so, start contributing by following instructions in CONTRIBUTING.md.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

Happy coding!
