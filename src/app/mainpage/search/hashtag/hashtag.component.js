import templateUrl from './hashtag.component.html'

/* @ngInject */
class HashtagController {
  constructor ($log) {
    this.messge = 'Search By Hashtag'
    $log.debug('HashtagController instantiated')
  }
}

export const hashtag = {
  templateUrl,
  controller: HashtagController,
  controllerAs: '$hashtag'
}

this.results = [
    {
      "id": 12,
      "content": "Pfft",
      "posted": 1479223381608,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 9,
        "content": "Rude",
        "posted": 1479223381373,
        "author": {
          "joined": 1479223379622,
          "username": "hinata",
          "profile": {
            "lastName": "Velez",
            "phone": "3524786041",
            "firstName": "Marie",
            "email": "goal_getter325@hotmail.com"
          }
        }
      }
    },
    {
      "id": 11,
      "content": "If you think you can",
      "posted": 1479223381547,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 10,
        "content": "Make me",
        "posted": 1479223381472,
        "author": {
          "joined": 1479223380154,
          "username": "machineman",
          "profile": {
            "lastName": "Mimbs",
            "phone": "154238346",
            "firstName": "Greg",
            "email": "gMimbs@yahoo.com"
          }
        }
      }
    },
    {
      "id": 10,
      "content": "Make me",
      "posted": 1479223381472,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 8,
        "content": "Shut Up",
        "posted": 1479223381284,
        "author": {
          "joined": 1479223380097,
          "username": "csturco",
          "profile": {
            "lastName": "Turco",
            "phone": "6784775842",
            "firstName": "Cory",
            "email": "csturco0331@yahoo.com"
          }
        }
      }
    },
    {
      "id": 9,
      "content": "Rude",
      "posted": 1479223381373,
      "repostOf": null,
      "author": {
        "joined": 1479223379622,
        "username": "hinata",
        "profile": {
          "lastName": "Velez",
          "phone": "3524786041",
          "firstName": "Marie",
          "email": "goal_getter325@hotmail.com"
        }
      },
      "inReplyTo": {
        "id": 7,
        "content": "BLEHHHHH",
        "posted": 1479223381203,
        "author": {
          "joined": 1479223380154,
          "username": "machineman",
          "profile": {
            "lastName": "Mimbs",
            "phone": "154238346",
            "firstName": "Greg",
            "email": "gMimbs@yahoo.com"
          }
        }
      }
    },
    {
      "id": 8,
      "content": "Shut Up",
      "posted": 1479223381284,
      "repostOf": null,
      "author": {
        "joined": 1479223380097,
        "username": "csturco",
        "profile": {
          "lastName": "Turco",
          "phone": "6784775842",
          "firstName": "Cory",
          "email": "csturco0331@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 7,
        "content": "BLEHHHHH",
        "posted": 1479223381203,
        "author": {
          "joined": 1479223380154,
          "username": "machineman",
          "profile": {
            "lastName": "Mimbs",
            "phone": "154238346",
            "firstName": "Greg",
            "email": "gMimbs@yahoo.com"
          }
        }
      }
    },
    {
      "id": 7,
      "content": "BLEHHHHH",
      "posted": 1479223381203,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 3,
        "content": "Hello @hinata, #fiancee",
        "posted": 1479223380679,
        "author": {
          "joined": 1479223380097,
          "username": "csturco",
          "profile": {
            "lastName": "Turco",
            "phone": "6784775842",
            "firstName": "Cory",
            "email": "csturco0331@yahoo.com"
          }
        }
      }
    },
    {
      "id": 6,
      "content": null,
      "posted": 1479223380942,
      "repostOf": {
        "id": 4,
        "content": "Please #repost this!",
        "posted": 1479223380762,
        "author": {
          "joined": 1479223380154,
          "username": "machineman",
          "profile": {
            "lastName": "Mimbs",
            "phone": "154238346",
            "firstName": "Greg",
            "email": "gMimbs@yahoo.com"
          }
        }
      },
      "author": {
        "joined": 1479223380097,
        "username": "csturco",
        "profile": {
          "lastName": "Turco",
          "phone": "6784775842",
          "firstName": "Cory",
          "email": "csturco0331@yahoo.com"
        }
      },
      "inReplyTo": null
    },
    {
      "id": 5,
      "content": null,
      "posted": 1479223380856,
      "repostOf": {
        "id": 4,
        "content": "Please #repost this!",
        "posted": 1479223380762,
        "author": {
          "joined": 1479223380154,
          "username": "machineman",
          "profile": {
            "lastName": "Mimbs",
            "phone": "154238346",
            "firstName": "Greg",
            "email": "gMimbs@yahoo.com"
          }
        }
      },
      "author": {
        "joined": 1479223379622,
        "username": "hinata",
        "profile": {
          "lastName": "Velez",
          "phone": "3524786041",
          "firstName": "Marie",
          "email": "goal_getter325@hotmail.com"
        }
      },
      "inReplyTo": null
    },
    {
      "id": 4,
      "content": "Please #repost this!",
      "posted": 1479223380762,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": null
    },
    {
      "id": 3,
      "content": "Hello @hinata, #fiancee",
      "posted": 1479223380679,
      "repostOf": null,
      "author": {
        "joined": 1479223380097,
        "username": "csturco",
        "profile": {
          "lastName": "Turco",
          "phone": "6784775842",
          "firstName": "Cory",
          "email": "csturco0331@yahoo.com"
        }
      },
      "inReplyTo": {
        "id": 2,
        "content": "This is Marie's #First #tweet. Shout out to @csturco #fiancee",
        "posted": 1479223380546,
        "author": {
          "joined": 1479223379622,
          "username": "hinata",
          "profile": {
            "lastName": "Velez",
            "phone": "3524786041",
            "firstName": "Marie",
            "email": "goal_getter325@hotmail.com"
          }
        }
      }
    },
    {
      "id": 2,
      "content": "This is Marie's #First #tweet. Shout out to @csturco #fiancee",
      "posted": 1479223380546,
      "repostOf": null,
      "author": {
        "joined": 1479223379622,
        "username": "hinata",
        "profile": {
          "lastName": "Velez",
          "phone": "3524786041",
          "firstName": "Marie",
          "email": "goal_getter325@hotmail.com"
        }
      },
      "inReplyTo": null
    },
    {
      "id": 1,
      "content": "This is Gregs #first #tweet. Shout out to @csturco",
      "posted": 1479223380269,
      "repostOf": null,
      "author": {
        "joined": 1479223380154,
        "username": "machineman",
        "profile": {
          "lastName": "Mimbs",
          "phone": "154238346",
          "firstName": "Greg",
          "email": "gMimbs@yahoo.com"
        }
      },
      "inReplyTo": null
    }
  ];
