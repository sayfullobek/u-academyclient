export const Notification = () => {
    return (
        <div>
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">
                    <div className="position-relative mb-3">
                        <div className="row g-3 justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Notifications</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <select className="form-select form-select-sm w-auto">
                                        <option selected value="option-1">All</option>
                                        <option value="option-2">News</option>
                                        <option value="option-3">Product</option>
                                        <option value="option-4">Project</option>
                                        <option value="option-4">Billing</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="app-card app-card-notification shadow-sm mb-4">
                        <div className="app-card-header px-4 py-3">
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <img className="profile-image" src="assets/images/profiles/profile-1.png"
                                         alt=""/>
                                </div>
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="notification-type mb-2"><span
                                        className="badge bg-info">Project</span></div>
                                    <h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                    <ul className="notification-meta list-inline mb-0">
                                        <li className="list-inline-item">2 hrs ago</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item">Amy Doe</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-4">
                            <div className="notification-content">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed sed ultrices dolor, ac maximus ligula. Donec ex orci, mollis ac purus vel,
                                tempor pulvinar justo. Praesent nibh massa, posuere non mollis vel, molestie non
                                mauris. Aenean consequat facilisis orci, sed sagittis mauris interdum at.
                            </div>
                        </div>
                        <div className="app-card-footer px-4 py-3">
                            <a className="action-link" href="#">View all
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="app-card app-card-notification shadow-sm mb-4">
                        <div className="app-card-header px-4 py-3">
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="app-icon-holder">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                            <path fill-rule="evenodd"
                                                  d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="notification-type mb-2"><span
                                        className="badge bg-warning">Billing</span></div>
                                    <h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                    <ul className="notification-meta list-inline mb-0">
                                        <li className="list-inline-item">1 day ago</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item">System</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-4">
                            <div className="notification-content">Praesent nibh massa, posuere non mollis vel,
                                molestie non mauris. Aenean consequat facilisis orci, sed sagittis mauris interdum
                                at.
                            </div>
                        </div>
                        <div className="app-card-footer px-4 py-3">
                            <a className="action-link" href="#">View invoice
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="app-card app-card-notification shadow-sm mb-4">
                        <div className="app-card-header px-4 py-3">
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="app-icon-holder icon-holder-mono">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16"
                                             className="bi bi-bar-chart-line" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="notification-type mb-2"><span
                                        className="badge bg-info">Project</span></div>
                                    <h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                    <ul className="notification-meta list-inline mb-0">
                                        <li className="list-inline-item">3 days ago</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item">System</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-4">
                            <div className="notification-content">Proin a magna sit amet mauris mollis mattis in at
                                dui. Fusce laoreet metus et nunc lobortis, suscipit sollicitudin augue pellentesque.
                                Maecenas maximus iaculis scelerisque.
                            </div>
                        </div>
                        <div className="app-card-footer px-4 py-3">
                            <a className="action-link" href="#">View invoice
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="app-card app-card-notification shadow-sm mb-4">
                        <div className="app-card-header px-4 py-3">
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <img className="profile-image" src="assets/images/profiles/profile-2.png"
                                         alt=""/>
                                </div>
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="notification-type mb-2"><span
                                        className="badge bg-secondary">Product</span></div>
                                    <h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                    <ul className="notification-meta list-inline mb-0">
                                        <li className="list-inline-item">7 days ago</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item">James Smith</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-4">
                            <div className="notification-content">Sed tempor faucibus arcu, nec tristique erat
                                congue sed. Pellentesque auctor ut elit vel feugiat. Sed a mauris tempor, tempor
                                lacus vel, tristique metus. Nulla interdum felis id metus fermentum laoreet.
                            </div>
                        </div>
                        <div className="app-card-footer px-4 py-3">
                            <a className="action-link" href="#">View all
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="app-card app-card-notification shadow-sm mb-4">
                        <div className="app-card-header px-4 py-3">
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <img className="profile-image" src="assets/images/profiles/profile-3.png"
                                         alt=""/>
                                </div>
                                <div className="col-12 col-lg-auto text-center text-lg-start">
                                    <div className="notification-type mb-2"><span
                                        className="badge bg-success">News</span></div>
                                    <h4 className="notification-title mb-1">Notification Heading Lorem Ipsum</h4>

                                    <ul className="notification-meta list-inline mb-0">
                                        <li className="list-inline-item">7 days ago</li>
                                        <li className="list-inline-item">|</li>
                                        <li className="list-inline-item">Kate Sanders</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="app-card-body p-4">
                            <div className="notification-content">Sed tempor faucibus arcu, nec tristique erat
                                congue sed. Pellentesque auctor ut elit vel feugiat. Sed a mauris tempor, tempor
                                lacus vel, tristique metus. Nulla interdum felis id metus fermentum laoreet.
                            </div>
                        </div>
                        <div className="app-card-footer px-4 py-3">
                            <a className="action-link" href="#">Read more
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right ms-2"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-4"><a className="btn app-btn-secondary" href="#">Load more
                        notifications</a></div>

                </div>
            </div>
        </div>
    )
}