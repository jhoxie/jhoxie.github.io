import React from 'react';

const ContentItem = ({ icon, label, description }) => (
    <div className="content-item">
        <div className="content-icon">
            {icon}
        </div>
        <h3 className="content-label">{label}</h3>
        <p className="content-description">{description}</p>
        <style jsx>{`
            .content-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.15rem;
            }
            .content-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
            }
            .content-label {
                font-size: 1.1rem;
                font-weight: 600;
                margin: 0;
                margin-bottom: 0.01rem;
                color: #4834D4;
                text-align: center;
            }
            .content-description {
                font-size: 1rem;
                color: #4834D4;
                margin: 0;
                line-height: 1.5;
                text-align: center;
            }
        `}</style>
    </div>
);

const ContentGrid = ({ items }) => (
    <div className="content-grid">
        {items.map((item, index) => (
            <ContentItem
                key={index}
                icon={item.icon}
                label={item.label}
                description={item.description}
            />
        ))}
        <style jsx>{`
            .content-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                justify-content: center;
                text-align: center;
            }
            @media only screen and (max-width: 767px) {
                .content-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
            }
        `}</style>
    </div>
);

const AFC = () => {
    const challengeItems = [
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.25" y="1" width="30" height="40" rx="4" stroke="#2A16A4" stroke-width="2"/>
                    <path d="M24.4923 28H8.53967C7.81578 28 7.33172 27.2547 7.62608 26.5934L10.7564 19.5604C11.1045 18.7784 12.2101 18.7666 12.5747 19.541L14.0378 22.6484C14.4109 23.4408 15.5502 23.4047 15.8724 22.5903L18.7669 15.2743C19.0963 14.4417 20.2698 14.4284 20.618 15.2532L25.4135 26.611C25.6919 27.2703 25.2079 28 24.4923 28Z" stroke="#2A16A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M35.75 1L35.75 41" stroke="#2A16A4" stroke-width="2" stroke-linecap="round"/>
                    <path d="M40.75 1L40.75 41" stroke="#2A16A4" stroke-width="2" stroke-linecap="round"/>
                </svg>
            ),
            label: "Story slides",
            description: "Slides with graphics, gifs, and text"
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="40" height="40" rx="4" stroke="#2A16A4" stroke-width="2"/>
                    <path d="M29.4639 20.4373L16.5039 12.8773C15.8372 12.4884 15 12.9692 15 13.741V28.3211C15 29.0788 15.81 29.5613 16.4763 29.2003L29.4363 22.1803C30.1221 21.8089 30.1376 20.8302 29.4639 20.4373Z" stroke="#2A16A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ),
            label: "Videos",
            description: "Play vertical videos with audio and skip forward and backward"
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="38" height="39" rx="4" stroke="#2A16A4" stroke-width="2"/>
                    <path d="M11.7391 32.5V18.4255M20 9V32.5M28.2609 26.7234V32.5M39 34.1915V5C39 2.79086 37.2091 1 35 1H5C2.79086 1 1 2.79086 1 5V36C1 38.2091 2.79086 40 5 40L35 40C37.2091 40 39 38.2091 39 36V34.1915Z" stroke="#2A16A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ),
            label: "Polls",
            description: "Answer polls and compare responses with the community"
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1" width="26.7222" height="32.1429" rx="4" stroke="#2A16A4" stroke-width="2"/>
                    <path d="M34.3889 7.42857C35.5309 7.66667 38.5 8.14286 38.5 11.7143L37.1296 36.7143C36.4444 40.2857 34.3889 41 30.963 41C27.087 41 17.0309 40.7619 12.463 40.2857M10.4074 11.7143C10.4074 7.42857 18.8519 5.72994 20 11.7143C20.6852 15.2857 15.8889 16.7143 15.8889 17.4286V20M15.8889 26.7143V26M5.5 33.1429H24.2222C26.4314 33.1429 28.2222 31.352 28.2222 29.1429V5C28.2222 2.79086 26.4314 1 24.2222 1H5.5C3.29086 1 1.5 2.79086 1.5 5V29.1429C1.5 31.352 3.29086 33.1429 5.5 33.1429Z" stroke="#2A16A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            ),
            label: "Quizzes",
            description: "Get questions and responses based individual answers to questions"
        }
    ];

    return (
        <div className="casestudy-container">
            {/* Hero */}
            <div className="casestudy-header-new">
                <div className="flex image-container">
                    <img className="portfolio-piece-img" src="/hero.png" alt="App-first content hero"/>
                </div>
                <div className="section-header">App-first content</div>
            </div>
            {/* Meta */}
            <div className="casestudy-panel">
                <div className="section-subheader extra-top-padding">Year</div>
                <div>2024</div>
            </div>
            <div className="casestudy-panel">
                <div className="section-subheader">My Role</div>
                <div>Product design, Prototyping, Usability testing</div>
            </div>
            <div className="casestudy-panel">
                <div className="section-subheader">Brief</div>
                <div>
                    BabyCenter's pregnancy app provides resources to new and expecting parents, with weekly educational content serving as one of our core offerings. User feedback consistently highlighted a strong desire for more daily pregnancy content. While we had daily content already, it was positioned below our weekly updates on the home feed, leading to an issue of content discovery where most users weren't scrolling past the weekly content to find it. I needed to rethink how we organize and surface content in the app in order to make it more accessible for users seeking more frequent touch points during their pregnancy.           
                </div>
            </div>
            <div className="casestudy-panel">
                <div className="section-subheader">Challenge</div>
                <div>
                    Redesigning how BabyCenter surfaces daily content presented several problems. The existing app was organized by content type so I needed to consider several different content types and how they could be brought together in a cohesive experience.
                    <ContentGrid items={challengeItems} />
                    <br/>
                    <div className="extra-top-padding-sm"></div>
                    Most of the content was originally created for the BabyCenter website so this gave me an opportunity to collaborate with edit and brand teams to rethink how the content could be presented in a way that felt engaging on a smaller screen and aligned with mobile user behaviors and expectations.
                    <br/>
                    <div className="extra-top-padding-sm"></div>
                    I also needed to balance revenue goals with user experience, ensuring ad placements weren't disrupted while still delivering quality content to users.  
                </div>
            </div>
            <div className="casestudy-panel">
                <div className="section-subheader">Discovery</div>
                <div>
                    To understand the full scope of our content, I audited all the content modules on the home feed and identified opportunities for consolidation and worked closely with the edit and brand teams to understand the content strategy.
                    <br/>
                    <div className="extra-top-padding-sm"></div>
                    Through collaboration with the engineering team, we identified technical constraints and requirements for implementing different types of content. These discussion helped shape product requirements and influenced design decisions, particularly around how I designed the interactive content templates. 
                    <br/>
                    <div className="extra-top-padding-sm"></div>
                    To validate the design approach, the product owner and I worked with the research team to conduct usability testing with multiple design iterations. The feedback helped inform the final design direction.
                    <br/>
                    <div className="flex image-container">
                        <img className="portfolio-piece-img" src="/userquotes.png" alt="User quotes from research"/>
                    </div>
                </div>
            </div>
            <div className="casestudy-panel">
                <div className="section-subheader">Solution</div>
                <div>
                    <strong>Show daily updates</strong>
                    <br/>
                    Prominent entrance on the home feed with indicators that content updates daily and communicates to the user if the content is new or already seen.
                </div>
                <div className="flex solution-image-container">
                    <img className="solution-img" src="/first_solution.png" alt="Daily updates solution"/>
                </div>
                <div className="extra-top-padding-sm"></div>
                <div>
                    <strong>Immersive content view</strong>
                    <br/>
                    When a user taps on a story thumbnail it opens up into a full screen view with black background to highlight the graphic assets that the brand and edit team worked on. A progress bar informs the user how many slides are in a story. At the bottom there is space for more actions like sharing, bookmarking, and a CTA to go deeper into the app.                </div>
                    <div className="extra-top-padding-sm"></div>
                <div className="flex solution-image-container">
                    <img className="solution-img" src="/second_solution.png" alt="Daily updates solution"/>
                </div>
                <div className="extra-top-padding-sm"></div>
                <div>
                    <strong>Interactive content</strong>
                    <br/>
                    We have two interactive story type, polls and quizzes, where users can answer questions directly from the stories and get immediate feedback.
                </div>
                <div className="extra-top-padding-sm"></div>
                <div className="flex solution-image-container">
                    <img className="solution-img" src="/third_solution.png" alt="Daily updates solution"/>
                </div>
            </div>
            
            <div className="casestudy-panel">
                <div className="section-subheader">Launch</div>
                <div>
                    We soft launched to a small group of users with A/B testing to find the right update frequency for users. After monitoring and measuring impact it was rolled out to 100% of users and increased app sessions and engagement. 
                </div>  
            </div>
            
            <style jsx>{`
                .image-container {
                    padding: 10%;
                    padding-bottom: 2rem;
                }
                .solution-image-container {
                    padding: 2rem 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                .solution-img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
                .portfolio-piece-img {
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                }
                @media only screen and (max-width: 767px) {
                    .image-container {
                        padding: 1rem;
                    }
                    .solution-image-container {
                        padding: 1rem 0;
                    }
                    .portfolio-piece-img, .solution-img {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default AFC;