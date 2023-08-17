---
title: AdaCon Norway on Matrix
---

> tl;dr&gt; >
> [find all AdaCon Norway chat rooms here](https://matrix.to/#/#space:adacon.no)

We use the open and distributed communication protocol
[Matrix](https://matrix.org/) for our chat.

All chat channels are hosted in our own homeserver.

Joining the communication on Matrix is **highly recommended** in order to keep
up to date before and during the event, because it is the only real-time
communication medium we use.

All communication in all channels on our homeserver is subject to
[our Code of Conduct](./code-of-conduct).

## Create a Matrix account

> If you already have an account, you can skip this step.

First, you need a Matrix account. You get an account by signing up on one of the
many [public homeservers](https://joinmatrix.org/servers/), for example
[matrix.im](https://matrix.im). Visit the homeserver and register a new account.

In order to keep the costs down we do not allow to register new accounts on the
AdaCon homeserver, because if these accounts are used to join channels on other
Matrix homeservers, incoming federation traffic will be significantly increased.

## Join the AdaCon space

Join the AdaCon space using [this link](https://matrix.to/#/#space:adacon.no)
to find all the relevant channels.

## Optional: Install mobile applications

You can use a browser-based client from your mobile phone (like for example
[FluffyChat](https://fluffychat.im/web/#/home)) or install a native app, for
example [Element](https://app.element.io/mobile_guide/) which has apps for
Android and iOS and a [web-based client](https://app.element.io/).

## Requesting additional channels

You may at any time request additional public or private channels, just reach
out to one of AdaCon Matrix homeserver admins:

- [`@coderbyheart:matrix.im`](https://matrix.to/#/@coderbyheart:matrix.im)
  (Markus Tacker)
- [`@majordomo:adacon.no`](https://matrix.to/#/@majordomo:adacon.no)
  (Administrative backup account)

## Infrastructure

`matrix.adacon.no` is managed by [Markus Tacker](https://coderbyheart.com/) and
runs on a _small_ [AWS Lightsail](https://aws.amazon.com/lightsail/) instance (2
GB RAM, 2 vCPUs, 60 GB SSD) which costs USD$ 10 / month and is hosted in the
`eu-north` (Stockholm) region.
