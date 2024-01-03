// Import necessary libraries from Azle
import { update, query, Record, Vec, Result, Opt, nat64, ic } from 'azle';

// Define the Poll record type
type Poll = Record<{
    id: string;
    question: string;
    options: Vec<string>;
    votes: Vec<nat64>;
    creator: string;
    createdAt: nat64;
}>

// Define the payload for creating a new poll
type PollPayload = Record<{
    question: string;
    options: Vec<string>;
}>

// Create a Vec to store polls
const pollStorage = new Vec<Poll>();

// Define the update function to create a new poll
update
export function createPoll(payload: PollPayload): Result<string, string> {
    const poll: Poll = {
        id: ic.idOf.caller,
        question: payload.question,
        options: payload.options,
        votes: new Vec<nat64>(),
        creator: ic.idOf.caller,
        createdAt: ic.time(),
    };

    if (poll.question.trim().length === 0 || poll.options.length === 0) {
        return Result.Err(`Error creating poll: Invalid poll data.`);
    }

    pollStorage.push(poll);
    return Result.Ok(`Poll created with ID: ${poll.id}`);
}

// Define the query function to get all polls
query
export function getAllPolls(): Vec<Poll> {
    return pollStorage;
}

// Define the update function to vote on a poll
update
export function vote(pollId: string, optionIndex: nat64): Result<string, string> {
    const poll = pollStorage.find((poll) => poll.id === pollId);
    if (!poll) {
        return Result.Err(`Poll with ID ${pollId} not found`);
    }

    if (optionIndex >= poll.options.length) {
        return Result.Err(`Invalid option index for poll ${pollId}`);
    }

    poll.votes.push(optionIndex);
    return Result.Ok(`Vote recorded for poll ${pollId}`);
}

// Define the query function to get the results of a poll
query
export function getPollResults(pollId: string): Result<Vec<nat64>, string> {
    const poll = pollStorage.find((poll) => poll.id === pollId);
    if (!poll) {
        return Result.Err(`Poll with ID ${pollId} not found`);
    }

    return Result.Ok(poll.votes);
}
