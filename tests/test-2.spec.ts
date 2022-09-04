import { test, expect } from '@playwright/test';

test('integration demo', async ({ page }) => {

    //   await page.goto('http://localhost:4200/#/');
    await page.goto("https://fss-dev.admiralty.co.uk/");

    // Click #signInButton
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#signInButton').click()
    ]);

    // Click [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').click();

    // Fill [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').fill('UKHODevTestUser1@outlook.com');

    // Click [aria-label="Continue"]
    await page1.locator('[aria-label="Continue"]').click();

    // Click [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').fill('<password>');

    // Click button:has-text("Sign in")
    await page1.locator('button:has-text("Sign in")').click();

    // Go to http://localhost:4200/#/search
    //   await page.goto('http://localhost:4200/#/search');
    await page.goto("https://fss-dev.admiralty.co.uk/#/search");

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('test');

    page.route('**/api/batch?$filter=%24batchContains(%27test%27)', async (route, request) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',


            body: JSON.stringify({
                "count": 8,
                "total": 8,
                "entries": [
                    {
                        "batchId": "ac7a0022-e7a9-45d3-86ac-bb6b74bf2b0f",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "RaviTestTestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "RaviTestFileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-22T07:58:25.28Z",
                        "expiryDate": "2022-09-21T10:39:13.05Z",
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/ac7a0022-e7a9-45d3-86ac-bb6b74bf2b0f/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "de693cbd-b006-405d-9eef-27e1627388ce",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-21T12:13:34.91Z",
                        "expiryDate": "2022-09-21T10:39:13.05Z",
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/de693cbd-b006-405d-9eef-27e1627388ce/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "7f69a5f8-609f-4d8a-baa1-86843e09bdc8",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-13T12:42:22.64Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/7f69a5f8-609f-4d8a-baa1-86843e09bdc8/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "d66c052a-7233-47f2-9863-1aa27ef72a8e",
                        "status": "Committed",
                        "allFilesZipSize": 29593,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "Media Type",
                                "value": "CD"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-05-09T13:40:56.29Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/d66c052a-7233-47f2-9863-1aa27ef72a8e/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "3bf64775-6ab2-4f94-9941-080a7427011f",
                        "status": "Committed",
                        "allFilesZipSize": 29593,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-05-05T14:01:04.253Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/3bf64775-6ab2-4f94-9941-080a7427011f/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "7ee4fbde-2b4a-4e53-9ab1-4911d4d77653",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "File$£!ShareService"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:42:01.777Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "V01X01.zip",
                                "fileSize": 1325579,
                                "mimeType": "application/text",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "doctype",
                                        "value": "datafile"
                                    },
                                    {
                                        "key": "extension",
                                        "value": "zip"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/7ee4fbde-2b4a-4e53-9ab1-4911d4d77653/files/V01X01.zip"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "e1a454ee-9887-4fe4-959a-78882ed03b72",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "File$£!ShareService"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:41:42.307Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/e1a454ee-9887-4fe4-959a-78882ed03b72/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "9d9554d2-58a4-4102-9113-a9001960955b",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:35:19.75Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/9d9554d2-58a4-4102-9113-a9001960955b/files/test.txt"
                                    }
                                }
                            }
                        ]
                    }
                ],
                "_Links": {
                    "self": {
                        "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                    },
                    "first": {
                        "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                    },
                    "last": {
                        "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                    }
                }
            })
        });
    });

    // Click button:has-text("Search")
    await page.locator('button:has-text("Search")').click();

});

test.only('mocking data', async ({ page }) => {

    //   await page.goto('http://localhost:4200/#/');
    await page.goto("https://fss-dev.admiralty.co.uk/");

    // Click #signInButton
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#signInButton').click()
    ]);

    // Click [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').click();

    // Fill [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').fill('UKHODevTestUser1@outlook.com');

    // Click [aria-label="Continue"]
    await page1.locator('[aria-label="Continue"]').click();

    // Click [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').fill('<password>');

    // Click button:has-text("Sign in")
    await page1.locator('button:has-text("Sign in")').click();

    // Go to http://localhost:4200/#/search
    //   await page.goto('http://localhost:4200/#/search');
    await page.goto("https://fss-dev.admiralty.co.uk/#/search");

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('test');

    page.route('**/api/batch?$filter=%24batchContains(%27test%27)', async (route, request) => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                "count": 9,
                "total": 9,
                "entries": [
                    {
                        "batchId": "ac7a0022-e7a9-45d3-86ac-bb6b74bf2b0f",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "RaviTestTestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "RaviTestFileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-22T07:58:25.28Z",
                        "expiryDate": "2022-09-21T10:39:13.05Z",
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/ac7a0022-e7a9-45d3-86ac-bb6b74bf2b0f/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "de693cbd-b006-405d-9eef-27e1627388ce",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "MoockingData_DEMO"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-21T12:13:34.91Z",
                        "expiryDate": "2022-09-21T10:39:13.05Z",
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/de693cbd-b006-405d-9eef-27e1627388ce/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "7f69a5f8-609f-4d8a-baa1-86843e09bdc8",
                        "status": "Committed",
                        "allFilesZipSize": 148,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-06-13T12:42:22.64Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "prasadtest.txt",
                                "fileSize": 22,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/7f69a5f8-609f-4d8a-baa1-86843e09bdc8/files/prasadtest.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "d66c052a-7233-47f2-9863-1aa27ef72a8e",
                        "status": "Committed",
                        "allFilesZipSize": 29593,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "Media Type",
                                "value": "CD"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-05-09T13:40:56.29Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/d66c052a-7233-47f2-9863-1aa27ef72a8e/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "3bf64775-6ab2-4f94-9941-080a7427011f",
                        "status": "Committed",
                        "allFilesZipSize": 29593,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "productid",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-05-05T14:01:04.253Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/3bf64775-6ab2-4f94-9941-080a7427011f/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "7ee4fbde-2b4a-4e53-9ab1-4911d4d77653",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "File$£!ShareService"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:42:01.777Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "V01X01.zip",
                                "fileSize": 1325579,
                                "mimeType": "application/text",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "doctype",
                                        "value": "datafile"
                                    },
                                    {
                                        "key": "extension",
                                        "value": "zip"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/7ee4fbde-2b4a-4e53-9ab1-4911d4d77653/files/V01X01.zip"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "e1a454ee-9887-4fe4-959a-78882ed03b72",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "File$£!ShareService"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:41:42.307Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/e1a454ee-9887-4fe4-959a-78882ed03b72/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "9d9554d2-58a4-4102-9113-a9001960955b",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "TestFSSUI"
                            },
                            {
                                "key": "Product Type",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:35:19.75Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/9d9554d2-58a4-4102-9113-a9001960955b/files/test.txt"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "batchId": "9d9554d2-58a4-4102-9113-a9001960955b",
                        "status": "Committed",
                        "allFilesZipSize": null,
                        "attributes": [
                            {
                                "key": "cellname",
                                "value": "Mock_Cell_Name"
                            },
                            {
                                "key": "Product Type",
                                "value": "FileShare$£@Service"
                            }
                        ],
                        "businessUnit": "ADDS",
                        "batchPublishedDate": "2022-01-17T20:35:19.75Z",
                        "expiryDate": null,
                        "files": [
                            {
                                "filename": "test.txt",
                                "fileSize": 29479,
                                "mimeType": "image/jpeg",
                                "hash": null,
                                "attributes": [
                                    {
                                        "key": "filetype",
                                        "value": "Country Delight"
                                    }
                                ],
                                "links": {
                                    "get": {
                                        "href": "/batch/9d9554d2-58a4-4102-9113-a9001960955b/files/test.txt"
                                    }
                                }
                            }
                        ],
                        "_Links": {
                            "self": {
                                "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                            },
                            "first": {
                                "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                            },
                            "last": {
                                "href": "/batch?limit=10&start=0&$filter=%24batchContains%28%27test%27%29"
                            }
                        }
                    }
                ]
            })
        });
    });

    // Click button:has-text("Search")
    await page.locator('button:has-text("Search")').click();
    console.log("Print");
});

test('500 scenario', async ({ page }) => {

    //   await page.goto('http://localhost:4200/#/');
    await page.goto("https://fss-dev.admiralty.co.uk/");

    // Click #signInButton
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#signInButton').click()
    ]);

    // Click [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').click();

    // Fill [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').fill('UKHODevTestUser1@outlook.com');

    // Click [aria-label="Continue"]
    await page1.locator('[aria-label="Continue"]').click();

    // Click [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').fill('<password>');

    // Click button:has-text("Sign in")
    await page1.locator('button:has-text("Sign in")').click();

    await page.goto("https://fss-dev.admiralty.co.uk/#/search");

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('test');

    page.route('**/api/batch?$filter=%24batchContains(%27test%27)', async (route, request) => {
        await route.fulfill({
            status: 500,
            body: 'server error - Mock response edited'
        });
    });

    // Click button:has-text("Search")
    await page.locator('button:has-text("Search")').click();

});

test('403 scenario', async ({ page }) => {

    //   await page.goto('http://localhost:4200/#/');
    await page.goto("https://fss-dev.admiralty.co.uk/");

    // Click #signInButton
    const [page1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#signInButton').click()
    ]);

    // Click [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').click();

    // Fill [placeholder="Email"]
    await page1.locator('[placeholder="Email"]').fill('UKHODevTestUser1@outlook.com');

    // Click [aria-label="Continue"]
    await page1.locator('[aria-label="Continue"]').click();

    // Click [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page1.locator('[placeholder="Password"]').fill('<password>');

    // Click button:has-text("Sign in")
    await page1.locator('button:has-text("Sign in")').click();

    await page.goto("https://fss-dev.admiralty.co.uk/#/search");

    // Click input[type="text"]
    await page.locator('input[type="text"]').click();

    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('test');

    page.route('**/api/batch?$filter=%24batchContains(%27test%27)', async (route, request) => {
        await route.fulfill({
            status: 403,
            body: 'Forbbiden - Mock Response'
        });
    });

    // Click button:has-text("Search")
    await page.locator('button:has-text("Search")').click();

});

