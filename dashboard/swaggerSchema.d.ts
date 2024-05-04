declare namespace Components {
    namespace Schemas {
        export interface Answer {
            id?: string; // uuid
            text?: string | null;
            sort?: number | null; // int32
            isDisabled?: boolean | null;
            questionId?: string; // uuid
            userId?: string | null; // uuid
            point?: number | null; // int32
            userAnswers?: UserAnswer[] | null;
        }
        export interface Attachment {
            id?: string; // uuid
            uri?: string | null;
            noteId?: string | null; // uuid
            note?: NotesPoll;
        }
        export interface AttachmentType {
            id?: number; // int32
            name?: string | null;
        }
        export interface LoginModel {
            email?: string | null;
            password?: string | null;
        }
        export interface NotesPoll {
            typeId?: number | null; // int32
            description?: string | null;
            pollId?: string | null; // uuid
            id?: string; // uuid
            poll?: Poll;
            type?: AttachmentType;
            attachments?: Attachment[] | null;
        }
        export interface Poll {
            id?: string; // uuid
            name?: string | null;
            description?: string | null;
            userId?: string; // uuid
            date?: string; // date-time
            isDisabled?: boolean | null;
            sort?: number; // int32
            imgUri?: string | null;
            user?: User;
            notesPolls?: NotesPoll[] | null;
            questions?: Question[] | null;
        }
        export interface Question {
            id?: string; // uuid
            title?: string | null;
            description?: string | null;
            sort?: number; // int32
            isDisabled?: boolean | null;
            pollId?: string | null; // uuid
            userId?: string | null; // uuid
            type?: number; // int32
            point?: number; // int32
            questionsType?: QuestionsType;
            answers?: Answer[] | null;
        }
        export interface QuestionsType {
            name?: string | null;
            id?: number; // int32
        }
        export interface RouteDashbord {
            date?: string /* date-time */[] | null;
            routeName?: string[] | null;
        }
        export interface User {
            id?: string; // uuid
            name?: string | null;
            email?: string | null;
            password?: string | null;
            roleName?: string | null;
        }
        export interface UserAnswer {
            id?: string; // uuid
            answerId?: string | null; // uuid
            text?: string | null;
            userId?: string; // uuid
            date?: string; // date-time
            answer?: Answer;
            user?: User;
        }
        export interface WeatherForecast {
            date?: string; // date-time
            temperatureC?: number; // int32
            temperatureF?: number; // int32
            summary?: string | null;
        }
    }
}
declare namespace Paths {
    namespace ApiAnswers {
        namespace Post {
            export type RequestBody = Components.Schemas.Answer;
            namespace Responses {
                export type $200 = Components.Schemas.Answer;
            }
        }
    }
    namespace ApiAuth {
        namespace Post {
            export type RequestBody = Components.Schemas.LoginModel;
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiPolls {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.Poll[];
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.Poll;
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiPolls$Id {
        namespace Get {
            namespace Parameters {
                export type Id = string; // uuid
            }
            export interface PathParameters {
                id: Parameters.Id /* uuid */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Poll;
            }
        }
    }
    namespace ApiQuestions {
        namespace Post {
            export type RequestBody = Components.Schemas.Question;
            namespace Responses {
                export type $200 = Components.Schemas.Question;
            }
        }
    }
    namespace ApiRouteByRouteName$Day {
        namespace Get {
            namespace Parameters {
                export type Day = number; // int32
            }
            export interface PathParameters {
                day: Parameters.Day /* int32 */;
            }
            namespace Responses {
                export type $200 = Components.Schemas.RouteDashbord;
            }
        }
    }
    namespace ApiUsers {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.User[];
            }
        }
    }
    namespace GetWeatherForecast {
        namespace Responses {
            export type $200 = Components.Schemas.WeatherForecast[];
        }
    }
}
