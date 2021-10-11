# Microfront end project

## Inflexible requirement #1

- Zero coupling between child projects
- No import of functions/objects/classes/etc
- No shared state
- Shared lib with MF is ok

## Inflexible requirement #2

- Near zero coupling b/w container and child app
- container shouldn't assume a child is using a particular framework
- Anu communication is done via callbacks or simple events

## Inflexible requirement #3

- CSS of one project should not affect another

## Inflexible requirement #4

- Version control shouldn't have any impact on overall project
- monorepo vs sepa rate

## Inflexible requirement #4

- Container should be able to decide to always use the latest version of the microfront end or a specific version
